const input_searchByName = document.getElementById("searchByName");
const div_searchResult = document.getElementById("searchResult");

// 資料重整
const localData = [];
weddingData.forEach(data  => {
    data.memberNameList.forEach(memberName =>{
        localData.push({
            "memberName" : memberName,
            "flag" : data.flag,
            "tableName": data.tableName,
            "memberCount": data.memberNameList.length
        });
    })  
})

// 名稱搜尋
input_searchByName.onchange = (e)=>{
    let resultData = localData.filter(data => data.memberName != null && data.memberName.includes(e.target.value));
    let htmlTableString =
    `<tr> 
        <th colspan=1'>所屬</th>
        <th colspan=1'>桌名</th>
        <th colspan=1'>桌人數</th>
        <th colspan=1'>姓名</th>
        <th colspan=1'></th>
    </tr>`;

    let htmlNoDataString = `<tr><th colspan=5' class='text-center'>查無資料</th></tr>`;

    if(resultData == null || resultData.length == 0){
        div_searchResult.innerHTML = "<table class='table table-striped fst-normal'>"+ htmlTableString + htmlNoDataString + "</table>";
        return;
    }

    for(i=0;i<resultData.length;i++){
        let flagName = "主桌";
        console.log(resultData[i].tableName);
        let tableName = resultData[i].tableName;
        let memberCount = resultData[i].memberCount;
        let memberName = resultData[i].memberName;

        if(resultData[i].flag == 1)
            flagName = "男方";
        else if (resultData[i].flag == 2) 
            flagName = "女方";

        htmlTableString += "<tr>";
        htmlTableString += `<th scope="row">${flagName} </th>`;
        htmlTableString += `<td>${tableName} </td>`;
        htmlTableString += `<td>${memberCount} </td>`;
        htmlTableString += `<td>${memberName} </td>`;
        htmlTableString += `<td><button class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark"/>查看位置</td>`
        htmlTableString += "</tr>";
    }

    div_searchResult.innerHTML = "<table class='table table-striped fst-normal'>" + htmlTableString + "</table>";
}