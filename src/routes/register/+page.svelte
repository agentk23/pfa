<script lang="ts">
    import Form from "$lib/components/Form.svelte";
    import type { User } from "$lib/types";

    let user: User;
</script>

<Form {...user} />


