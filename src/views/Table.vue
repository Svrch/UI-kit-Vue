<script setup>
import BaseTable from '@/components/Table/BaseTable.vue';
import TableRow from '@/components/Table/TableRow.vue'
import TableColumn from '@/components/Table/TableColumn.vue'
import Button from '@/components/Button.vue';
import { ref, computed } from 'vue'


const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 140px 100px'
const books = ref([
    {
        id: 1,
        author: 'Dmitry Glukhovsky',
        title: 'Metro 2033',
        image: 'https://cdn1.ozone.ru/s3/multimedia-u/6025029642.jpg',
        bg: '#FFA26B'
    },
    {
        id: 12,
        author: 'James Clear',
        title: 'Atomic Habits: An Easy',
        image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
        bg: '#00C48C'
    },
    {
        id: 2,
        author: 'J. K. Rowling',
        title: 'Harry Potter and the Order of the Phoenix',
        image: 'https://basket-13.wbbasket.ru/vol2000/part200034/200034421/images/big/1.jpg',
        bg: '#00C48C'
    }
])

const sortField = ref('id')
const typeSort = ref('asc')

const booksSorting = computed(() => {
    return books.value.sort((a, b) => {
        let modifier = 1;
        if (typeSort.value === 'desc') modifier = -1
        if (a[sortField.value] < b[sortField.value]) return -1 * modifier
        if (a[sortField.value] > b[sortField.value]) return 1 * modifier
        return 0
    })
})

const setSort = (name) => {
    if (sortField.value === name) {
        if (typeSort.value === 'asc') {
            typeSort.value = 'desc'
        } else {
            typeSort.value = 'asc'
        }
    } else {
        sortField.value = name
    }
}

</script>
<template>
    <div class="heading-1">Table</div>
    <span>Sort Field: {{ sortField }}</span><br>
    <span>Type Field: {{ typeSort }}</span>
    <BaseTable
        :head="tableHeads"
        :columnTemplates=tableSizeColumns
        @sorting="setSort"
    >
        <TableRow
            v-for="book in booksSorting"
            :key="book.id"
            :columnTemplates=tableSizeColumns
            :bgRow="book.bg"
        >
            <TableColumn :columnTitle="tableHeads[0]">
                {{ book.id }}
            </TableColumn>
            <TableColumn :columnTitle="tableHeads[1]">
                {{ book.author }}
            </TableColumn>
            <TableColumn :columnTitle="tableHeads[2]">
                {{ book.title }}
            </TableColumn>
            <TableColumn
                :image="true"
                :srcImage="book.image"
            >
            </TableColumn>
            <TableColumn>
                <Button label="Read online" />
            </TableColumn>
        </TableRow>
    </BaseTable>
</template>