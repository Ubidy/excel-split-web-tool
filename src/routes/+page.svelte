<script lang="ts">
  import { base } from "$app/paths";
  import { groupBy } from 'lodash-es';

  import { useUpload } from "@zach.codes/use-upload/lib/svelte";

  let [upload, state] = useUpload(({ files }) => ({
    method: "PUT",
    url: "http://localhost:5173",
    body: files[0],
  }));

  import excelToJson from "convert-excel-to-json";

  // import { Sheet } from "svelte-sheets";

  import XLSX from "xlsx";
  import { Open, Sheet, download } from "svelte-sheets";
  import example from "./_example.json";
  let open;
  let currentValue;
  let selected;
  let active = 0;
  let sheets = [example];
  let sheetNames = [];
  function onload(loadedSheets, loadedSheetNames) {
    sheets = loadedSheets;
    sheetNames = loadedSheetNames;
  }
  const decode = XLSX.utils.decode_cell;
  $: sheet = sheets[active];
  $: decoded = selected?.[0] ? decode(selected[0]) : { c: 0, r: 0 };
  $: {
    console.log('sheet', sheet);
  }
</script>

<!-- <div>
  {#if $state.done}
    <div>Done uploading!</div>
  {/if}
  {#if $state.error}
    <div>Error uploading: {$state.error}</div>
  {/if}
  {#if $state.loading}
    <div>{$state.progress}% complete</div>
  {/if}
  <input
    type="file"
    on:change={(e) => {
      console.log(e.currentTarget.files);
 
      const result = excelToJson({
          sourceFile: e.currentTarget.files[0].name
      });

      console.log('result', result);
      
      
      if (e.currentTarget.files) upload({ files: e.currentTarget.files });

    }}
  />
</div>
<h1>sveltekit-gh-pages</h1>
<p>Deployed to GitHub Pages</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<a href="{base}/about">About</a> -->

<Open bind:open {onload} />
<button class="btn secondary" on:click={(_) => open.click()}>
  <i class="fas fa-folder-open mr-1" />Open .xlsx File
</button>
{#if sheet}
  <button
    class="btn secondary"
    on:click={(_) => {
      console.log('sheet', sheet);

      const sheetsObject = sheet.data.map((d, i) => i > 0 ? ({ 
        [`${sheet.data[0][0]}`]: d[0],
        [`${sheet.data[0][1]}`]: d[1],
        [`${sheet.data[0][2]}`]: d[2],
        [`${sheet.data[0][3]}`]: d[3],
        [`${sheet.data[0][4]}`]: d[4],
        [`${sheet.data[0][5]}`]: d[5],
        [`${sheet.data[0][6]}`]: d[6].trim().replace("_", " - ").replace("Ubidy-", "Ubidy - ").replace('"Ubidy', "Ubidy").replace(' "', "").replace("UBIDY", "Ubidy").replace("Ubdiy", "Ubidy").replace("Ubidy Areeb", "Ubidy - Areeb").replace("Ubidy -  ", "Ubidy - ").replace("Ubidy -Jobskey", "Ubidy - Jobskey"),
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
        // [`${sheet.data[0][20]}`]: d[20],
       }) : null ).filter(Boolean);

      //  _.groupBy([{name: 'one'}, {name: 'one'}, {name: 'three'}], 'name');
      // console.log('sheetsObject',groupBy(sheetsObject, "Tag Name"));

      const groupByTagName = groupBy(sheetsObject, "Tag Name");
      console.log('groupByTagName', groupByTagName);
      
      let multipleSheets = []
      for (const prop in groupByTagName) {
        let i = {
          columns: sheet.columns,
          mergeCells: sheet.mergeCells,
          row: sheet.row,
          style: sheet.style,
          sheetName: prop,
          data: groupByTagName[prop].map(g => {
            let gItem = [];
            
            for (const k in g) {
              // console.log('g', g);
              // console.log('gk', g[k]);
              // gItem.push(g[k])
            }
          })
        };
        multipleSheets.push(i);
        // console.log('iterator',groupByTagName[prop]);
        
        
      }
      // console.log('multipleSheets',multipleSheets);
      // download(sheets, "example" + ".xlsx")}
    }
    
    }
  >
    <i class="fas fa-download mr-1" />Download file
  </button>
{/if}
{#if sheet}
  <!-- <input
    bind:value={sheet.data[decoded.r][decoded.c]}
    style={{ width: "50vw" }}
    on:change={(v) => console.log("change", v)}
  /> -->
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
<!-- <a href="https://github.com/ticruz38/svelte-sheets" class="github-link">
  <span />
</a> -->
<div class="sheet-names">
  {#each sheetNames as sn, i (sn)}
    <span class:selected={sheet.sheetName == sn} on:click={(_) => (active = i)}
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
</style>
