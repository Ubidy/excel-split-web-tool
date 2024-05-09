<script lang="ts">
  import { groupBy } from "lodash-es";

  import { Open, Sheet, download } from "svelte-sheets";
  import example from "./_example.json";
  let open;
  let currentValue;
  let selected;
  let active = 0;
  let sheets = [example];
  let sheetNames = [];
  let groupByTagName = {};
  let LIMIT = 10;
  let groupByTagNameSplit = [];
  function onload(loadedSheets, loadedSheetNames) {
    sheets = loadedSheets;
    sheetNames = loadedSheetNames;
  }
  $: sheet = sheets[active];

  $: {
    const sheetsObject = sheets[active].data
      .map((d, i) =>
        i > 0
          ? {
              [`${sheet.data[0][0]}`]: d[0],
              [`${sheet.data[0][1]}`]: d[1],
              [`${sheet.data[0][2]}`]: d[2],
              [`${sheet.data[0][3]}`]: d[3],
              [`${sheet.data[0][4]}`]: d[4],
              [`${sheet.data[0][5]}`]: d[5],
              [`${sheet.data[0][6]}`]: d[6]
                .trim()
                .replace("_", " - ")
                .replace("Ubidy-", "Ubidy - ")
                .replace('"Ubidy', "Ubidy")
                .replace(' "', "")
                .replace("UBIDY", "Ubidy")
                .replace("Ubdiy", "Ubidy")
                .replace("Ubidy Areeb", "Ubidy - Areeb")
                .replace("Ubidy -  ", "Ubidy - ")
                .replace("Ubidy -Jobskey", "Ubidy - Jobskey")
                .trim()
                .substring(0, 75),
              [`${sheet.data[0][7]}`]: d[7],
              [`${sheet.data[0][8]}`]: d[8],
              [`${sheet.data[0][9]}`]: d[9],
              [`${sheet.data[0][10]}`]: d[10],
              [`${sheet.data[0][11]}`]: d[11],
              [`${sheet.data[0][12]}`]: d[12],
              [`${sheet.data[0][13]}`]: d[13],
              [`${sheet.data[0][14]}`]: d[14],
              [`${sheet.data[0][15]}`]: d[15],
              [`${sheet.data[0][16]}`]: d[16],
              [`${sheet.data[0][17]}`]: d[17],
              [`${sheet.data[0][18]}`]: d[18],
              [`${sheet.data[0][19]}`]: d[19],
              [`${sheet.data[0][20]}`]: d[20],
            }
          : null
      )
      .filter(Boolean);

    groupByTagName = groupBy(sheetsObject, "Tag Name");
    const groupByTagNameCount = Math.ceil(
      Object.keys(groupByTagName).length / LIMIT
    );
    groupByTagNameSplit = Array.from(Array(groupByTagNameCount).keys());
  }
</script>

<Open bind:open {onload} />
<button class="btn secondary" on:click={_ => open.click()}>
  <i class="fas fa-folder-open mr-1" />Open .xlsx File
</button>
{#each groupByTagNameSplit as tagSplit, i}
  <button
    class="btn secondary margin-right"
    on:click={_ => {
      const utcDate = new Date().toJSON().slice(0, 10);
      // let multipleSheets = [];
      let count = 0;
      let start = i > 0 ? i * LIMIT : i;
      let end = start + LIMIT;
      for (const prop in groupByTagName) {
        let i = {
          columns: sheet.columns,
          mergeCells: sheet.mergeCells,
          row: sheet.data[0],
          style: sheet.style,
          sheetName: prop.substring(0, 30),
          data: groupByTagName[prop].map(g => {
            let gItem = [];

            for (const k in g) {
              gItem.push(g[k]);
            }
            return gItem;
          })
        };

        i.data.unshift(sheet.data[0]);
        if (count >= start && count < end) {
          download([i], prop + "_" + utcDate + ".xlsx");
        }
        count++;
      }
    }}>Download Part {i + 1}</button
  >
{/each}
{#if sheet}
  <Sheet
    bind:data={sheet.data}
    columns={sheet.columns}
    rows={sheet.rows}
    mergeCells={sheet.mergeCells || {}}
    options={{ tableHeight: "90vh" }}
    style={sheet.style || {}}
    bind:currentValue
    bind:selected
  />
{/if}
<div class="sheet-names">
  {#each sheetNames as sn, i (sn)}
    <span class:selected={sheet.sheetName == sn} on:click={_ => (active = i)}
      >{sn}</span
    >
  {/each}
</div>

<style>
  .sheet-names {
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
  }
  .github-link {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    background-image: url("/github.png");
    height: 2rem;
    width: 2rem;
    background-position: center;
    background-repeat: none;
    background-size: cover;
  }
  .selected {
    text-decoration: underline;
  }

  .margin-right {
    margin-right: 5px;
  }
</style>
