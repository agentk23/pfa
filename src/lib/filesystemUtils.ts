import {
    exists,
    BaseDirectory,
    createDir,
    writeFile,
    readTextFile
} from "@tauri-apps/api/fs";

export async function checkConfig() {
    let pepe = await exists("config/pepe.txt", {
        dir: BaseDirectory.AppLocalData,
    });
    return pepe;
}
export async function createConfigFile() {
    await createDir("config", { dir: BaseDirectory.AppLocalData });
    await writeFile(
        { path: "config/pepe.txt", contents: "pepe" },
        { dir: BaseDirectory.AppLocalData }
    );
    return "file created";
}
export async function readConfigFiles(){
    let pepe = await readTextFile("config/pepe.txt", {
        dir: BaseDirectory.AppLocalData,
    });
    return pepe;
}