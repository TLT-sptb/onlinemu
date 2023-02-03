<template>
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown"
            aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'dropDown'
}
</script>
<style scoped>
.dropdown:hover>.dropdown-menu {
    display: block;
}

.dropdown>.dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
}
</style>