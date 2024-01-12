<script lang="ts" setup generic="T">
  import type {PropType} from "vue";
  import type {TableColumn} from "~/lib/types/service";

  const props = defineProps({
    data: {
      type: Array as PropType<T[]>,
      required: true
    },
    columns: {
      type: Array as PropType<TableColumn<T>[]>,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: () => ''
    }
  });

  const handleData = (column: TableColumn<T>, row: T) => {
    if (column?.format) {
      return column.format(row);
    }
    return String(row[column.key as keyof T]);
  };
</script>

<template>
  <div class="table-widget">
    <UiCard max-width="unset">
      <div class="table-label">{{label}}</div>
      <table class="table data-table">
        <thead>
          <tr>
            <th v-for="column in columns">{{column.title}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data">
            <td v-for="column in columns" :data-name="column.title">
              <span v-html="handleData(column, row)"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </UiCard>
  </div>
</template>

<style lang="scss" scoped>
  @import 'assets/sass/variables';

  .table-label {
    @include font16(600);
    margin-bottom: 20px;
  }

  .data-table {
    width: 100%;
    max-width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-top-color: $light_grey;
    thead {
      background: $white;
      border-color: $light_grey;
      border-style: solid;
      border-width: 0;
      vertical-align: middle;
      th {
        @include font14(600);
        padding: 15px 5px;
        text-align: left;
        border-bottom: 1px solid $grey_rgba_opacity;
      }
    }
    tbody {
      tr {
        &:nth-child(even) {
          background: $input_grey;
        }
        td {
          font-size: 14px;
          padding: 15px 5px;
          .actions-row {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: flex-end;
            button {
              background: transparent;
              border: none;
              cursor: pointer;
              img {
                min-width: 32px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .data-table {
      display: flex;
      flex-direction: column;
      thead {
        display: none;
      }
      tbody {
        tr {
          padding: 10px;
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
          border: 1px solid $grey_rgba_opacity;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        td {
          padding: unset;
          margin-bottom: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: right;
          &::before {
            text-align: left;
            content: attr(data-name);
            display: block;
            font-weight: bold;
            margin-right: 3px;
          }
        }
      }
    }
  }
</style>