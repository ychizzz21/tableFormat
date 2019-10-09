(function () {

  /**
   * 固定标签结构
   */

  var _format = `
  <div class="y-table-view" style="height: 624px;">
  <div class="y-table-box">
    <div class="y-table-header">
      <table cellspacing="0" cellpadding="0" border="0" class="y-table">
        <thead>
          <tr>
          </tr>
        </thead>
      </table>
    </div>
    <div class="y-table-body">
      <table cellspacing="0" cellpadding="0" border="0" class="y-table">
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</div>
  `

  /**
   *  功能api，可扩展
   */

  let _api = {

    // 渲染table
    render(params) {
      let tb = document.getElementById(params.elem)
      var body = document.getElementsByTagName("body")[0]
      tb.style.display = "none"
      body.innerHTML += _format
      
      let arrCol = []
      let colTitle = []
      let colWidth = []
      for (const i of params.col) {
        colTitle.push(i.title)
        colWidth.push(i.width)
      }
      arrCol.push(colTitle, colWidth)
      this.setColumn(arrCol)

      let arrContent = []
      for (const i of params.content) {
        arrContent.push(i)
      }
      this.setContent(arrContent)
    },

    // 设置表头
    setColumn: function (arr) {
      var tr = document.querySelector('.y-table-header .y-table thead tr')
      for (const i of arr[0]) {
        tr.innerHTML += `<th>${i}</th>`
      }
    },

    // 设置内容
    setContent: function (arr) {
      var tbody = document.querySelector('.y-table-body .y-table tbody')
      for (const i of arr) {
        tbody.innerHTML += `<tr>
        <td>${i.first}</td>
        <td>${i.second}</td>
        <td>${i.third}</td>
        <td>${i.fourth}</td>
        <td>${i.fifth}</td>
        </tr>`
      }
    }
  }

  this.Ytable = _api
})()



