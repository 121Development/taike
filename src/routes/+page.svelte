<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Textarea } from '$lib/components/ui/textarea';

    const { data } = $props();

    $inspect(data.profiles);

</script>

    <h1>Add a note</h1>

<textarea> </textarea>
<Button>Save</Button>
