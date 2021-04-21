require('tabulator-tables/src/js/modules/format');

Tabulator.prototype.extendModule("format", "formatters", (function () {

  var _tickCross = (cell, formatterParams) => {
    const formatmodule = Tabulator.prototype.moduleBindings['format'];
    return formatmodule.prototype.formatters.tickCross(cell, formatterParams);
  };


  return {
    delete: function () {
      return "<i class='fa fa-trash-o'></i>";
    },
    checkbox: function (cell) {
      return _tickCross(cell, {
        tickElement: "<i class='fa fa-check-square-o'></i>",
        crossElement: "<i class='fa fa-square-o'></i>",
      });
    },
    radio: function (cell) {
      return _tickCross(cell, {
        tickElement: "<i class='fa fa-dot-circle-o'></i>",
        crossElement: "<i class='fa fa-circle-o'></i>",
      });
    },
    filetype: function (cell) {
      var value = cell.getValue();
      if (value === "dir") {
        return "<i class='fa fa-folder-o' style='color: #9e9e9e;'></i>";
      }
    },
    rownumber: function (cell) {
      let table = cell.getTable();
      let i = table.rowManager.activeRows.indexOf(cell.getRow()._getSelf()) + 1;
      return i + (table.getPage() - 1) * 10;
    },

  }
})());