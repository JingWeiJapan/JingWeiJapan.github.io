const input_searchByName = document.getElementById("searchByName");
const div_searchResult = document.getElementById("searchResult");
const div_searchArea = document.getElementById("searchArea");
const span_locationArea = document.getElementById("locationArea");
const span_searchArea = document.getElementById("searchArea");
const span_resultArea = document.getElementById("resultArea");
const btn_closeLocationArea = document.getElementById("closeLocationArea");
const img_locationImage = document.getElementById("locationImage");

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
        htmlTableString += `<td><button onclick="showLocation(` + convertTableNameToImageID(tableName) + `);" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark"/>查看位置</td>`
        htmlTableString += "</tr>";
    }

    div_searchResult.innerHTML = "<table class='table table-striped fst-normal'>" + htmlTableString + "</table>";
}

// 隱藏位置資訊圖片
btn_closeLocationArea.onclick = function(){
    span_searchArea.style.display = 'block';
    span_resultArea.style.display = 'block';
    span_locationArea.style.display = 'none';
}

// 轉換桌名稱至圖片ID
function convertTableNameToImageID (tableName){
    let imageID = "";

    switch(tableName){
        case "主桌": imageID = "0";break;
        case "溪湖桌": imageID = "1";break;
        case "三芝1號桌": imageID = "2";break;
        case "三芝2號桌": imageID = "8";break;
        case "阿花1號桌": imageID = "4";break;
        case "阿花2號桌": imageID = "10";break;
        case "忠駝1號桌": imageID = "3";break;
        case "忠駝2號桌": imageID = "9";break;
        case "新郎德霖1號桌": imageID = "7";break;
        case "新郎德霖2號桌": imageID = "13";break;
        case "台運1號桌": imageID = "11";break;
        case "台運2號桌": imageID = "5";break;
        case "台運3號桌": imageID = "6";break;
        case "打拼夥伴": imageID = "12";break;
        case "丁家1號桌": imageID = "22";break;
        case "丁家2號桌": imageID = "14";break;
        case "丁家3號桌": imageID = "15";break;
        case "蔡家1號桌": imageID = "16";break;
        case "蔡家2號桌": imageID = "23";break;
        case "聖格1號桌": imageID = "19";break;
        case "聖格2號桌": imageID = "20";break;
        case "素桌": imageID = "17";break;
        case "爸媽朋友": imageID = "18";break;
        case "新娘朋友1號桌": imageID = "25";break;
        case "新娘朋友2號桌": imageID = "24";break;
        case "新娘二技同學1號桌": imageID = "21";break;
        case "新娘二技同學2號桌": imageID = "26";break;
        case "新娘德霖同學桌": imageID = "27";break;
        default: imageID = "0";break;
    }

    return imageID
}

// 顯示位置資訊圖片
function showLocation(imageID){
    img_locationImage.setAttribute("src",`./image/${imageID}.png`);
    span_searchArea.style.display = 'none';
    span_resultArea.style.display = 'none';
    span_locationArea.style.display = 'block';
}