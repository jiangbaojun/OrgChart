'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Lao Lao',
      'title': 'general manager',
      'children': [
        { 'name': 'Bo Miao', 'title': 'department manager', 'collapsed': true,'relationship': '000',
          'children': [
            { 'name': 'Li Jing', 'title': 'senior engineer', 'className': 'slide-up' },
            { 'name': 'Li Xin', 'title': 'senior engineer', 'collapsed': true, 'className': 'slide-up',
              'children': [
                { 'name': 'To To', 'title': 'engineer', 'className': 'slide-up' },
                { 'name': 'Fei Fei', 'title': 'engineer', 'className': 'slide-up' },
                { 'name': 'Xuan Xuan', 'title': 'engineer', 'className': 'slide-up' }
              ]
            }
          ]
        },
        { 'name': 'Su Miao', 'title': 'department manager',
          'children': [
            { 'name': 'Pang Pang', 'title': 'senior engineer' },
            { 'name': 'Hei Hei', 'title': 'senior engineer', 'collapsed': true,
              'children': [
                { 'name': 'Xiang Xiang', 'title': 'UE engineer', 'className': 'slide-up' },
                { 'name': 'Dan Dan', 'title': 'engineer', 'className': 'slide-up' },
                { 'name': 'Dan Dan', 'title': 'engineer', 'className': 'slide-up' },
                { 'name': 'Zai Zai', 'title': 'engineer', 'className': 'slide-up' }
              ]
            }
          ]
        }
      ]
    };

    var data = [
      {id: "0", name: "根节点", collapsed: false, url: ""},
      {id: "1", parentId: "0", name: "页面"},
      {id: "2", parentId: "0", name: "表单"},
      {id: "5", parentId: "0", name: "其它"},
      {id: "3", parentId: "1", name: "查询1"},
      {id: "4", parentId: "2", name: "表单1"},
      {id: "6", parentId: "5", name: "通知"},
      {id: "7", parentId: "1", name: "查询2"},
      {id: "10", parentId: "7", name: "查询2-1"},
      {id: "8", parentId: "3", name: "查询1-1"},
      {id: "9", parentId: "8", name: "查询1-1-1"},
      {id: "11", parentId: "0", name: "页面"},
      {id: "12", parentId: "0", name: "表单"},
      {id: "15", parentId: "0", name: "其它"},
      {id: "13", parentId: "1", name: "查询1"},
      {id: "14", parentId: "2", name: "表单1"},
      {id: "16", parentId: "5", name: "通知"},
      {id: "17", parentId: "1", name: "查询2"},
      {id: "110", parentId: "7", name: "查询2-1"},
      {id: "18", parentId: "3", name: "查询1-1"},
      {id: "19", parentId: "8", name: "查询1-1-1"},
      {id: "21", parentId: "0", name: "页面"},
      {id: "22", parentId: "0", name: "表单"},
      {id: "25", parentId: "0", name: "其它"},
      {id: "23", parentId: "1", name: "查询1"},
      {id: "24", parentId: "2", name: "表单1"},
      {id: "26", parentId: "5", name: "通知"},
      {id: "27", parentId: "1", name: "查询2"},
      {id: "210", parentId: "7", name: "查询2-1"},
      {id: "28", parentId: "3", name: "查询1-1"},
      {id: "29", parentId: "8", name: "查询1-1-1"}
    ];

    $('#chart-container').orgchart({
      'data' : data,
      'nodeContent': 'title',
      'direction': "t2b",
      'depth': 4,
      'toggleSiblingsResp': true,
      'exportButton': true,
      'draggable': true,
      'zoom': true,
      'pan':true,
      'rootId':"0",
      "isPidData":true
    });

  });

})(jQuery);