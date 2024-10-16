import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Table, { SelectTable, TableVariant } from '.';
import readme from './readme.md';
import selectTableDoc from './selectTable.md';

export const TABLE_VARIANTS: { [k in TableVariant]: k } = {
  DEFAULT: 'DEFAULT',
  STATIC: 'STATIC',
};

const TableStories = storiesOf(`${__dirname}`, module)
  .add(
    'Basic',
    () => {
      const knobs = {
        sortable: boolean('sortable', true),
        loading: boolean('loading', false),
        showPagination: boolean('showPagination', false),
        showPaginationTop: boolean('showPaginationTop', false),
        showPaginationBottom: boolean('showPaginationBottom', false),
        stripped: boolean('stripped', true),
        withRowBorder: boolean('withRowBorder', false),
      };
      return (
        <Table
          {...knobs}
          data={[
            { id: 1, prop2: 5, prop3: 'some text 1' },
            { id: 2, prop2: 4, prop3: 'some text 2' },
            { id: 3, prop2: 3, prop3: 'some text 3' },
            { id: 4, prop2: 2, prop3: 'some text 4' },
            { id: 5, prop2: 1, prop3: 'some text 5' },
          ]}
          columns={[
            {
              sortable: false,
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'Property 2',
              accessor: 'prop2',
            },
            {
              Header: 'Property 3',
              accessor: 'prop3',
            },
          ]}
        />
      );
    },
    { info: { text: readme } },
  )
  .add(
    'Variants',
    () => {
      const knobs = {
        variant: select('variant', TABLE_VARIANTS, TABLE_VARIANTS.DEFAULT),
      };
      return (
        <Table
          {...knobs}
          data={[
            { id: 1, prop2: 5, prop3: 'some text 1' },
            { id: 2, prop2: 4, prop3: 'some text 2' },
            { id: 3, prop2: 3, prop3: 'some text 3' },
            { id: 4, prop2: 2, prop3: 'some text 4' },
            { id: 5, prop2: 1, prop3: 'some text 5' },
          ]}
          columns={[
            {
              sortable: false,
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'Property 2',
              accessor: 'prop2',
            },
            {
              Header: 'Property 3',
              accessor: 'prop3',
            },
          ]}
        />
      );
    },
    { info: { text: readme } },
  )
  .add(
    'SelectTable',
    () => (
      <SelectTable
        //props to control selection
        keyField="idField"
        isSelected={idField => idField === 'id_2'}
        toggleSelection={action('toggle')}
        toggleAll={action('toggleAll')}
        //basic table props
        data={[
          { idField: 'id_1', prop2: 5, prop3: 'some text 1' },
          { idField: 'id_2', prop2: 4, prop3: 'some text 2' },
          { idField: 'id_3', prop2: 3, prop3: 'some text 3' },
          { idField: 'id_4', prop2: 2, prop3: 'some text 4' },
          { idField: 'id_5', prop2: 1, prop3: 'some text 5' },
        ]}
        columns={[
          {
            sortable: false,
            Header: 'ID',
            accessor: 'idField',
          },
          {
            Header: 'Property 2',
            accessor: 'prop2',
          },
          {
            Header: 'Property 3',
            accessor: 'prop3',
          },
        ]}
      />
    ),
    {
      info: {
        text: `${readme} ${selectTableDoc}`,
      },
    },
  )
  .add('No Data', () => (
    <Table
      columns={[
        {
          sortable: false,
          Header: 'ID',
          accessor: 'idField',
        },
        {
          Header: 'Property 2',
          accessor: 'prop2',
        },
        {
          Header: 'Property 3',
          accessor: 'prop3',
        },
      ]}
    />
  ));

export default TableStories;
