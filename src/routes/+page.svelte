<script lang="ts">
    import { goto } from "$app/navigation";
    import SimpleCard from "$lib/components/SimpleCard.svelte";
    import { checkConfig, createConfigFile, readConfigFiles } from "$lib/filesystemUtils";

    checkConfig().then((res) => {
        if (!res) {
            createConfigFile().then((res) => {
                console.log(res);
            });
        } else {
            readConfigFiles().then((res) => {
                console.log(res);
            });
        }
    });
    function navigateToRegister() {
        goto("/register");
    }
</script>

<SimpleCard forwardClickAction={navigateToRegister}></SimpleCard>
