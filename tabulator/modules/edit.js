require('tabulator-tables/src/js/modules/edit');

Tabulator.prototype.extendModule("edit", "editors", (function () {

  var _select = (cell, onRendered, success, cancel, editorParams) => {
    var Edit = cell.getTable().modules.edit;
    const editmodule = Tabulator.prototype.moduleBindings['edit'];

    return editmodule.prototype.editors.select.call(Edit, cell, onRendered, success, cancel, editorParams);
  };


  return {
    'user-data-type': (cell, onRendered, success, cancel) => {
      return _select(cell, onRendered, success, cancel, { values: ["string", "long", "boolean", "date", "enum"] });
    },
    'targetschema-newType': (cell, onRendered, success, cancel) => {
      return _select(cell, onRendered, success, cancel, {
        values: [
          "string",
          "boolean",
          "short",
          "integer",
          "long",
          "byte",
          "float",
          "double",
          "date",
          "timestamp",
          "decimal"
        ]
      });
    },
    'attr_filter_selector-filterOperator': (cell, onRendered, success, cancel) => {
      let editorParams = function (cell) {
        var options = [
          { label: "EQUAL", value: "EQUAL", type: "string" },
          { label: "NOT_EQUAL", value: "NOT_EQUAL", type: "string" },
          { label: "CONTAINS", value: "CONTAINS", type: "string" },
          {
            label: "NOT_CONTAINS",
            value: "NOT_CONTAINS",
            type: "string"
          },
          { label: "START_WITH", value: "START_WITH", type: "string" },
          { label: "END_WITH", value: "END_WITH", type: "string" },
          { label: "IS_MISSING", value: "IS_MISSING", type: "string" },
          {
            label: "IS_NOT_MISSING",
            value: "IS_NOT_MISSING",
            type: "string"
          },
          { label: "ISIN", value: "ISIN", type: "string" },
          { label: "LIKE", value: "LIKE", type: "string" },
          { label: ">", value: ">", type: "numeric" },
          { label: "<", value: "<", type: "numeric" },
          { label: "<=", value: "<=", type: "numeric" },
          { label: ">=", value: ">=", type: "numeric" },
          { label: "==", value: "==", type: "numeric" },
          { label: "IS_MISSING", value: "IS_MISSING", type: "numeric" },
          {
            label: "IS_NOT_MISSING",
            value: "IS_NOT_MISSING",
            type: "numeric"
          }
        ];

        var type = cell.getRow().getData().dataType;
        return { values: options.filter((d) => d.type == type) };
      }

      return _select(cell, onRendered, success, cancel, editorParams(cell));
    },
    'dependency': (cell, onRendered, success, cancel) => {
      return _select(cell, onRendered, success, cancel, {
        values: EditorController.getShapeDependency().map((d) => d.name)
      });
    },
  }


})());