<template>
    <div>
        <h2>Результаты: </h2>
        <hr/>
        <table v-for="(quest, index) in questions" :key="index">
            <tr>
                <td>{{ quest.title }}</td>
                <td>{{ answers[index] }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ['questions', 'answers']
    }
</script>

<style scoped>
    table {
        margin: 0 auto;
        width: 400px;
        border-collapse: collapse;
    }

    table td {
        padding: 12px 16px;
    }

    table thead tr {
        font-weight: bold;
        border-top: 1px solid #e8e9eb;
    }

    table tr {
        border-bottom: 1px solid #e8e9eb;
    }

    table tbody tr:hover {
        background: #e8f6ff;
    }
</style>