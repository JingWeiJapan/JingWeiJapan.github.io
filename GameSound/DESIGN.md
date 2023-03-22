## 音效標籤
```
<audio>
  <source src="" type="audio/ogg" />
  <source src="" type="audio/mpeg" />
  不支援音效
</audio>
```

## 音效API
```
const audio = document.createElement("audio");
audio.setAttribute('loop', '');
audio.setAttribute('type', '音檔格式');
audio.setAttribute('src', '音檔位址');

audio.onloadeddata = () => {
  // 加載完成
}

audio.onerror = ()=> {
  // 加載失敗
}

```

## Audio Tag支援的音檔類型
ogg: 開放且無專利的壓縮音源格式  
mp3: 大幅降低數據量的壓縮音源格式  
wav: 微軟開發的音源格式，質量與CD基本無異

## 關注點
1. 如果需要立即播放音效，需要確保資源預載入。
2. ios不支援ogg

## 問題集中區
1. 絕大部分裝置為了節省流量，已經不支援自動播放，需要經玩家交互來觸發播放。
