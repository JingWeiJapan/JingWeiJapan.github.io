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
    if(resultData == null || resultData.length == 0) return;

    console.log(resultData);

    let htmlTableString =
    `<tr> 
        <th>所屬</th>
        <th>桌名</th>
        <th>桌人數</th>
        <th>姓名</th>
    </tr>`;

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
        htmlTableString += `<td>${flagName} </td>`;
        htmlTableString += `<td>${tableName} </td>`;
        htmlTableString += `<td>${memberCount} </td>`;
        htmlTableString += `<td>${memberName} </td>`;
        htmlTableString += `<td><button/>查看位置</td>`
        htmlTableString += "</tr>";
    }

    div_searchResult.innerHTML = "<table>" + htmlTableString + "</table>";
}


// <table>
//   <tr>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
//   </tr>
//   <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//   </tr>
//   <tr>
//     <td>Centro comercial Moctezuma</td>
//     <td>Francisco Chang</td>
//     <td>Mexico</td>
//   </tr>
// </table>
