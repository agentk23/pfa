<script lang="ts">
    import {
        exists,
        BaseDirectory,
        createDir,
        writeFile,
        readTextFile
    } from "@tauri-apps/api/fs";

    async function checkConfig() {
        let pepe = await exists("config/pepe.txt", {
            dir: BaseDirectory.AppLocalData,
        });
        return pepe;
    }
    async function createFile() {
        await createDir("config", { dir: BaseDirectory.AppLocalData });
        await writeFile(
            { path: "config/pepe.txt", contents: "pepe" },
            { dir: BaseDirectory.AppLocalData }
        );
        return "file created";
    }
    async function readFile(){
        let pepe = await readTextFile("config/pepe.txt", {
            dir: BaseDirectory.AppLocalData,
        });
        return pepe;
    }

    checkConfig().then((res) => {
        if (!res) {
            createFile().then((res) => {
                console.log(res);
            });
        } else {
            readFile().then((res) => {
                console.log(res);
            });
        }
    });
</script>

<h1 class="text-center">Welcome to SvelteKit</h1>
