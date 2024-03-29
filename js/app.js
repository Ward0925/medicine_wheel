$(function () {
    appstar();
});
var title = [
    { 編號: '01', picX: 18.5, picY: 18.5, text: '造物者', startDate: '', endDate: '' },
    { 編號: '02', picX: 22, picY: 20, text: '大地母親', startDate: '', endDate: '' },
    { 編號: '03', picX: 19.5, picY: 22.2, text: '太陽父親', startDate: '', endDate: '' },
    { 編號: '04', picX: 16.2, picY: 21.4, text: '月亮祖母', startDate: '', endDate: '' },
    { 編號: '05', picX: 14.8, picY: 18.5, text: '海龜家族', startDate: '', endDate: '', 屬性: '土' },
    { 編號: '06', picX: 16.2, picY: 15.6, text: '青蛙家族', startDate: '', endDate: '', 屬性: '水' },
    { 編號: '07', picX: 19.5, picY: 14.8, text: '雷鳥家族', startDate: '', endDate: '', 屬性: '火' },
    { 編號: '08', picX: 22, picY: 17, text: '蝴蝶家族', startDate: '', endDate: '', 屬性: '風' },
    { 編號: '09', picX: 18.5, picY: 2.25, text: '北', startDate: '', endDate: '' },
    { 編號: 10, picX: 34.75, picY: 18.5, text: '東', startDate: '', endDate: '' },
    { 編號: 11, picX: 18.5, picY: 34.75, text: '南', startDate: '', endDate: '' },
    { 編號: 12, picX: 2.25, picY: 18.5, text: '西', startDate: '', endDate: '' },
    { 編號: 13, picX: 24.7, picY: 3.6, text: '大地復原', startDate: '2023-12-22', endDate: '2024-01-19', 屬性: '土', 家族: '海龜家族', 方位: '北' },
    { 編號: 14, picX: 30, picY: 7.1, text: '休眠淨化', startDate: '2024-01-20', endDate: '2024-02-18', 家族: '蝴蝶家族', 方位: '北' },
    { 編號: 15, picX: 33.5, picY: 12.3, text: '強風', startDate: '2024-02-19', endDate: '2024-03-20', 屬性: '水', 家族: '青蛙家族', 方位: '北' },
    { 編號: 16, picX: 33.5, picY: 24.7, text: '樹萌芽', startDate: '2024-03-21', endDate: '2024-04-19', 屬性: '火', 家族: '雷鳥家族', 方位: '東' },
    { 編號: 17, picX: 30, picY: 29.9, text: '蛙回歸', startDate: '2024-04-20', endDate: '2024-05-20', 屬性: '土', 家族: '海龜家族', 方位: '東' },
    { 編號: 18, picX: 24.7, picY: 33.4, text: '玉米種植', startDate: '2024-05-21', endDate: '2024-06-20', 屬性: '風', 家族: '蝴蝶家族', 方位: '東' },
    { 編號: 19, picX: 12.3, picY: 33.4, text: '烈日', startDate: '2024-06-21', endDate: '2024-07-22', 屬性: '水', 家族: '青蛙家族', 方位: '南' },
    { 編號: 20, picX: 7, picY: 29.9, text: '採莓', startDate: '2024-07-23', endDate: '2024-08-22', 家族: '雷鳥家族', 方位: '南' },
    { 編號: 21, picX: 3.5, picY: 24.7, text: '收穫', startDate: '2024-08-23', endDate: '2024-09-22', 屬性: '土', 家族: '海龜家族', 方位: '南' },
    { 編號: 22, picX: 3.5, picY: 12.3, text: '群鴨飛遷', startDate: '2024-09-23', endDate: '2024-10-23', 屬性: '風', 家族: '蝴蝶家族', 方位: '西' },
    { 編號: 23, picX: 7, picY: 7.1, text: '結凍', startDate: '2024-10-24', endDate: '2024-11-21', 屬性: '水', 家族: '青蛙家族', 方位: '西' },
    { 編號: 24, picX: 12.3, picY: 3.6, text: '長雪', startDate: '2024-11-22', endDate: '2024-12-21', 屬性: '火', 家族: '雷鳥家族', 方位: '西' },
    { 編號: 25, picX: 18.5, picY: 6, text: '淨化', startDate: '', endDate: '' },
    { 編號: 26, picX: 18.5, picY: 9, text: '重建', startDate: '', endDate: '' },
    { 編號: 27, picX: 18.5, picY: 12, text: '純潔', startDate: '', endDate: '' },
    { 編號: 28, picX: 31, picY: 18.5, text: '清晰', startDate: '', endDate: '' },
    { 編號: 29, picX: 28, picY: 18.5, text: '智慧', startDate: '', endDate: '' },
    { 編號: 30, picX: 25, picY: 18.5, text: '光明', startDate: '', endDate: '' },
    { 編號: 31, picX: 18.5, picY: 25, text: '成長', startDate: '', endDate: '' },
    { 編號: 32, picX: 18.5, picY: 28, text: '信任', startDate: '', endDate: '' },
    { 編號: 33, picX: 18.5, picY: 31, text: '愛', startDate: '', endDate: '' },
    { 編號: 34, picX: 6, picY: 18.5, text: '體驗', startDate: '', endDate: '' },
    { 編號: 35, picX: 9, picY: 18.5, text: '內省', startDate: '', endDate: '' },
    { 編號: 36, picX: 12, picY: 18.5, text: '力量', startDate: '', endDate: '' },
];
var sideSet = [
    { 方位: '北', id: 'north', },
    { 方位: '東', id: 'east', },
    { 方位: '南', id: 'south', },
    { 方位: '西', id: 'west', },
    { 方位: '天', id: 'sky', },
    { 方位: '地', id: 'land', },
];
var colorSelect = [
    { 配色: '紅', 顏色: ['#F7C1C1', '#E88B8B', '#E06363'] },
    { 配色: '橙', 顏色: ['#F4D5C1', '#E8BA8B', '#E08D63'] },
    { 配色: '黃', 顏色: ['#F4F4C1', '#E8E88B', '#E0D663'] },
    { 配色: '綠', 顏色: ['#EFEBCE', '#D6CE93', '#A3A380'] },
    { 配色: '藍', 顏色: ['#BDDFE9', '#ACBDD7', '#7E9DC9'] },
    { 配色: '紫', 顏色: ['#CAABD8', '#9873B9', '#714288'] },
    { 配色: '灰', 顏色: ['#D3D3D3', '#A3A3A3', '#3A3A3A'] },
    { 配色: '粉', 顏色: ['#F9C0D2', '#EA8AA5', '#E26170'] },
    { 配色: '深綠', 顏色: ['#CCE3DE', '#A4C3B2', '#6B9080'] },
    { 配色: '紅紫', 顏色: ['#E8C2CA', '#B392AC', '#735D78'] },
    { 配色: '米', 顏色: ['#EEE0D3', '#E8CAA4', '#ECCFB1'] },
];
var allcircle = [];
function appstar() {
    const html = `
        <div class="row row-cols-xl-2 ">
            <div class="col-12 col-xl-6">
                <div class="card radius-10">
                    <div class="card-body">
                        <div class="center" id="myCanvasPie">
                            <canvas id="myCanvas"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-6">
                <div class="card radius-10">
                    <div class="card-body" id="canvas-change">
                        <div style="width: fit-content; display: flex; align-items: center; white-space: nowrap;">
                            <span style="margin-right: 10px;">日期選擇</span>
                            <input autocomplete="off" class="input_text" id="timedates" type="text">
                            <input hidden="" id="selected_date">
                            <select id="chooseColor"></select>
                        </div>
                        <div id="chooseSelect" style="display: flex; flex-direction: column;"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    $(`#bodylist`).html(html);
    timedates();
    // const html = `
    //     <div class="row row-cols-xl-2 ">
    //         <div class="col-12 col-xl-6">
    //             <div class="card radius-10">
    //                 <div class="card-body">
    //                     <div class="center" id="myCanvasPie">
    //                         <canvas id="myCanvas"></canvas>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="col-12 col-xl-6">
    //             <div class="card radius-10">
    //                 <div class="card-body" id="canvas-change">
    //                     <div style="width: fit-content; display: flex; align-items: center; white-space: nowrap;">
    //                         <span style="margin-right: 10px;">日期選擇</span>
    //                         <div id="timeButton">
    //                             <input class="input_text" type="text" value="請輸入日期" id="timeButtonClick">
    //                         </div>
    //                         <select id="chooseColor"></select>
    //                     </div>
    //                     <div id="chooseSelect" style="display: flex; flex-direction: column;"></div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // `;
    // $(`#bodylist`).html(html);
    // $(document).on(`click`, `#timeButtonClick`, function () {
    //     $(this).remove();
    //     const time = `
    //         <input autocomplete="off" class="input_text" id="timedates" type="text">
    //         <input hidden="" id="selected_date">
    //     `;
    //     $(`#timeButton`).html(time);
    //     timedates();
    // });
    let chooseHTML = `<div><h6 class="outlined-text">守護靈</h6></div>`;
    for (const s of sideSet) {
        const { 方位, id } = s;
        const num = `
            <select id="num-${id}">
                <option>位置數量</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
        `;
        chooseHTML += `
            <div style="display: flex; align-items: center;">
                <span style="text-align: right; margin-right: 10px;">${方位}</span>
                <input required="" class="input_text" type="text" style="width: 190px;">
                ${num}
                <div id="select-${id}"></div>
            </div>
        `;
    }
    $(`#chooseSelect`).html(chooseHTML);
    // 配色選單
    let buttonColor = "";
    for (const c of colorSelect) {
        buttonColor += `
            <option value="${c.配色}">${c.配色}</option>
        `;
    }
    buttonColor += "";
    $(`#chooseColor`).html(buttonColor);
    function selectNum(row) {
        // 選單數量
        const { number, id } = row;
        const option = `${title.filter(key => key.編號 !== '01')
            .map(key => `
                <option value="${key.text}">${key.編號}-${key.text}</option>
            `
            )
            .join('')
            }`;
        let selectSet = "";
        for (let i = 1; i <= number; i++) {
            selectSet += `
                <select class="select-set" data-side="${id}">
                    <option></option>
                    ${option}
                </select>
            `;
        }
        $(`#select-${id}`).html(selectSet);
    }
    // 監聽數量變化
    for (const s of sideSet) {
        const { 方位, id } = s;
        $(document).on(`change`, `#num-${id}`, function () {
            const number = $(`#num-${id}`).val();
            selectNum({ number: number, id: id });
        });
    }
    // // 監聽選取的text為何
    // $(document).on(`change`, `.select-set`, function () {
    //     const selectedOptions = [];
    //     $('.select-set').each(function () {
    //         const selectValue = $(this).val();
    //         const side = $(this).data('side');
    //         if (selectValue) {
    //             // 將選取的項目推入陣列
    //             selectedOptions.push({ side: side, project: selectValue });
    //         }
    //     });
    //     console.log(selectedOptions)
    // });
    $(document).off(`change`, `#canvas-change`).on(`change`, `#canvas-change`, function () {
        const timeget = $(`#selected_date`).val();
        // 獲取本命月份、方位、家族
        const dateget = lightcircle({ time: timeget });
        // 獲取根據方位的定位項目
        const selectedOptions = [];
        $('.select-set').each(function () {
            const selectValue = $(this).val();
            const side = $(this).data('side');
            if (selectValue) {
                const resultfilter = title.filter(key => {
                    return key.text === selectValue
                });
                const newData = {
                    編號: parseFloat(resultfilter[0].編號),
                    picX: parseFloat(resultfilter[0].picX),
                    picY: parseFloat(resultfilter[0].picY),
                    side: side,
                    project: selectValue,
                    type: `守護靈`,
                }
                // 將選取的項目推入陣列
                selectedOptions.push(newData);
            }
        });
        // 串聯所有項目
        const result = dateget.concat(selectedOptions)
        // console.log(timeget);
        // console.log(result)
        // 執行繪圖
        myCanvasSet(result);
    });
}
function lightcircle(row) {
    const { time } = row;
    const result = [];
    for (const t of title) {
        const { 編號, picX, picY, text, startDate, endDate, 屬性, 家族, 方位 } = t;
        let timeSet = moment(time).format('2024-MM-DD');
        const timeGet = moment(time).format('2023-MM-DD');
        if (timeGet >= moment('2024-12-22').format('2023-MM-DD') && timeGet <= moment('2024-12-31').format('2023-MM-DD')) {
            timeSet = moment(time).format('2023-MM-DD');
        }
        let startSet = moment(startDate).format('YYYY-MM-DD');
        let endSet = moment(endDate).format('YYYY-MM-DD');
        if (startDate && (timeSet >= startSet && timeSet <= endSet)) {
            const 本命月份 = numjudege(text);
            const 本命方位 = numjudege(方位);
            const 本命家族 = numjudege(家族);
            result.push({ 編號: 本命月份.num, picX: 本命月份.picX, picY: 本命月份.picY, side: `本命月份`, project: text, type: `生日` });
            result.push({ 編號: 本命方位.num, picX: 本命方位.picX, picY: 本命方位.picY, side: `本命方位`, project: 方位, type: `生日` });
            result.push({ 編號: 本命家族.num, picX: 本命家族.picX, picY: 本命家族.picY, side: `本命家族`, project: 家族, type: `生日` });
        }
    }
    // console.log(result)
    return result;
}
function numjudege(project) {
    for (const t of title) {
        if (t.text === project) {
            return { num: parseFloat(t.編號), picX: t.picX, picY: t.picY };
        }
    }
}
function myCanvasSet(result) {
    $(`#myCanvas`).remove();
    $(`#myCanvasPie`).append(`<canvas id="myCanvas"></canvas>`);
    // 獲取 Canvas 元素
    var canvas = document.getElementById('myCanvas');
    // 初次執行
    resizeCanvas();
    // 監聽窗口大小變化事件
    window.addEventListener('resize', resizeCanvas);
    function resizeCanvas() {
        // 設置畫布大小
        const divWidth = document.getElementById('myCanvasPie').offsetWidth;
        // 畫布解析度
        canvas.width = 1600;
        canvas.height = 1600;
        // 實際畫布大小
        $(`#myCanvas`).css({
            width: divWidth,
            height: divWidth,
        })
        // 重新繪製內容
        draw(result);
    }
}
function draw(result) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    // 抗鋸齒效果
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high'; // 文本渲染的平滑度
    // 繪製背景
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    function widthAndHeight(row) {
        // 位置判斷
        const { picX, picY } = row;
        // 獲取 Canvas 元素的寬度和高度
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        // X軸位置
        const centerX = (canvasWidth / 37) * picX;
        // Y軸位置
        const centerY = (canvasHeight / 37) * picY;
        return { centerX: centerX, centerY: centerY };
    }
    function radiusSet(row) {
        // console.log(canvas.width)
        // 圓形半徑
        const { 編號, size } = row;
        let radius = 0;
        if (編號 === 1) {
            radius = canvas.width * (0.05 + size)
        } else if (編號 > 8 && 編號 <= 12) {
            radius = canvas.width * (0.0425 + size)
        } else {
            radius = canvas.width * (0.0325 + size)
        }
        return Math.floor(radius);
    }
    function drawCircle(row) {
        // 繪製實心圓
        const { 編號, picX, picY, color } = row;
        const xyGet = widthAndHeight({ picX: picX, picY: picY });
        const centerX = Math.floor(xyGet.centerX);
        const centerY = Math.floor(xyGet.centerY);
        const radius = radiusSet({ 編號: 編號, size: 0 });
        let colorSet = 'black';
        if (color) {
            colorSet = color;
        }
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = colorSet;
        ctx.fill();
        ctx.closePath();
    }
    function drawHollowCircle(row) {
        // 繪製空心圓
        const { 編號, picX, picY, color, size } = row;
        const sizeSet = !size ? 0 : size;
        const xyGet = widthAndHeight({ picX: picX, picY: picY });
        const centerX = Math.floor(xyGet.centerX);
        const centerY = Math.floor(xyGet.centerY);
        const radius = radiusSet({ 編號: 編號, size: sizeSet });
        let colorSet = '#000';
        if (color) {
            colorSet = color;
        }
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, (Math.PI * 2));
        ctx.strokeStyle = colorSet;
        ctx.lineWidth = 4;
        // 抗鋸齒效果
        ctx.shadowBlur = 0.1; // 陰影模糊半徑
        ctx.shadowColor = color; // 陰影顏色
        ctx.stroke();
        ctx.closePath();
    }
    async function drowTitleMark(row) {
        const { 編號, picX, picY, type, work } = row;
        const colorGet = colorSetJudge();
        // 繪製標籤
        let backgroundColor = colorGet[1];
        let frameColor = colorGet[1];
        // let backgroundColor = "lightblue";
        // let frameColor = "black";
        const { width, height, locationX, locationY } = await locationXYset({ 編號, picX, picY, type, work });
        // // 先定位繪製的結果
        // ctx.translate(locationX, locationY);
        // 建立一個新的路徑
        ctx.beginPath();
        // 移動到左上角
        ctx.moveTo(locationX, locationY);
        // 繪製一條水平線
        ctx.lineTo(locationX + width, locationY);
        // 繪製右側弧線
        ctx.arc(locationX + width, locationY + height, height, -Math.PI / 2, Math.PI / 2);
        // 繪製一條水平線
        ctx.lineTo(locationX + width, locationY + (height * 2));
        // 繪製左側弧線
        ctx.arc(locationX, locationY + height, height, Math.PI / 2, -Math.PI / 2);
        // 關閉路徑
        ctx.closePath();

        // 填充路徑
        ctx.fillStyle = backgroundColor; // 填充顏色
        ctx.fill(); // 填充內部
        // // 設置線條寬度
        // ctx.lineWidth = 0; // 設置線條寬度為 4 像素
        // // 繪製路徑
        // ctx.strokeStyle = frameColor; // 線條顏色
        // ctx.stroke(); // 繪製線條
    }
    async function writeText(row) {
        const { 編號, picX, picY, type, text, work } = row;
        const { locationX, locationY } = await locationXYset({ 編號, picX, picY, type, text, work });
        let canvasX = locationX;
        let canvasY = locationY;
        // 判斷字體大小
        let fontSize = 0;
        const canvasWidth = canvas.width;
        if (work === "基礎") {
            if (編號 === 1 || (編號 >= 9 && 編號 <= 12)) {
                fontSize = Math.floor(canvasWidth * 0.02);
            } else if ((編號 >= 2 && 編號 <= 8) || 編號 === 13 || 編號 === 14 || 編號 === 18 || 編號 === 22) {
                fontSize = Math.floor(canvasWidth * 0.014);
            }
            else {
                fontSize = Math.floor(canvasWidth * 0.016);
            }
        } else if (work === "本命") {
            fontSize = Math.floor(canvasWidth * 0.016);
            canvasX = locationX + (canvasWidth * 0.025);
            canvasY = locationY + (canvasWidth * 0.02);
        }
        // 字體樣式
        ctx.font = `bold ${fontSize}px Arial`; // 字體大小及類型
        ctx.fillStyle = '#000'; // 文字顏色
        ctx.textAlign = 'center'; // 文字居中水平對齊
        if (work === "基礎") {
            // 計算編號位置
            const firstLineY = canvasY - fontSize * 0.7;
            // 繪製編號
            ctx.fillText(編號, canvasX, firstLineY);
            // 計算text位置
            const secondLineY = canvasY + fontSize * 0.7;
            // 字體樣式
            ctx.font = `bold ${fontSize}px Arial`; // 字體大小及類型
            // 繪製text
            ctx.fillText(text, canvasX, secondLineY);
        } else if (work === "本命") {
            // 繪製text
            ctx.fillText(text, canvasX, canvasY);
        }

    }
    async function locationXYset(row) {
        // 各個標籤定位
        const { 編號, picX, picY, type, work } = row;
        const xyGet = widthAndHeight({ picX: picX, picY: picY });
        const centerX = xyGet.centerX;
        const centerY = xyGet.centerY;
        const canvasWidth = canvas.width;
        let width = 100;
        let height = 50;
        let locationX = centerX;
        let locationY = centerY;
        if (work === "基礎") {
            return { locationX: locationX, locationY: locationY };
        } else if (work === "本命") {
            if (type.includes('本命家族') || type.includes('本命月份') || type.includes('本命方位')) {
                width = canvasWidth * 0.05;
                height = canvasWidth * 0.015;
            }
            if (type.includes("本命家族")) {
                if (編號 === 5) {
                    locationX = centerX - (centerX * 0.18);
                    locationY = centerY + (centerY * 0.08);
                } else if (編號 === 6) {
                    locationX = centerX - (centerX * 0.06);
                    locationY = centerY - (centerY * 0.17);
                } else if (編號 === 7) {
                    locationX = centerX + (centerX * 0.05);
                    locationY = centerY - (centerY * 0.17);
                } else if (編號 === 8) {
                    locationX = centerX + (centerX * 0.075);
                    locationY = centerY - (centerY * 0.12);
                }
            } else if (type.includes("本命方位")) {
                if (編號 === 9 || 編號 === 11) {
                    locationX = centerX + (canvasWidth * 0.063);
                    locationY = centerY - (canvasWidth * 0.04);
                } else if (編號 === 10 || 編號 === 12) {
                    locationX = centerX - (canvasWidth * 0.024);
                    locationY = centerY + (canvasWidth * 0.05);
                }
            } else if (type.includes("本命月份")) {
                if (編號 === 13 || 編號 === 14 || 編號 >= 17) {
                    locationX = centerX + (canvasWidth * 0.053);
                    locationY = centerY - (canvasWidth * 0.03);
                } else if (編號 === 15 || 編號 === 16) {
                    locationX = centerX - (canvasWidth * 0.105);
                    locationY = centerY - (canvasWidth * 0.03);
                }
            }
        }
        return { width: Math.floor(width), height: Math.floor(height), locationX: Math.floor(locationX), locationY: Math.floor(locationY) };
    }
    const chooseCount = [];
    if (result.length > 0) {
        const advance = [];
        const cache = {};
        for (r of result) {
            const { 編號, picX, picY, side, project, type } = r;
            const key = `${編號}`
            if (!cache.hasOwnProperty(key)) {
                advance.push(key);
                cache[key] = new Set();
                chooseCount.push({ 編號: parseFloat(編號), picX, picY, project, type: [], 次數: 0 });
            }
            const index = advance.indexOf(key);
            chooseCount[index].次數 += 1;
            chooseCount[index].type.push(sideSetJudge(side));
        }
    }
    function sideSetJudge(side) {
        const list = ['本命月份', '本命家族', '本命方位'];
        if (list.includes(side)) {
            return side;
        }
        for (const s of sideSet) {
            if (s.id === side) {
                return s.方位;
            }
        }
    }
    let chooseNumbers = [];
    if (chooseCount.length > 0) {
        for (const c of chooseCount) {
            const { 編號, project, type, 次數 } = c;
            drawHollowCircleNum({
                次數: 次數, type: type, 編號: 編號, picX: c.picX, picY: c.picY
            })
        }
        chooseNumbers = chooseCount.map(item => item.編號);
    }
    function colorSetJudge() {
        const colorChoose = $(`#chooseColor`).val();
        // 查找符合 colorChoose 的項目
        const selectedColor = colorSelect.find(item => item['配色'] === colorChoose);
        // 獲取對應的顏色數組
        const colorGet = selectedColor ? selectedColor['顏色'] : [];
        return colorGet;
    }
    async function drawHollowCircleNum(row) {
        const { 次數, type, 編號, picX, picY } = row;
        // const colorChoose = $(`#chooseColor`).val();
        // // 查找符合 colorChoose 的項目
        // const selectedColor = colorSelect.find(item => item['配色'] === colorChoose);
        // // 獲取對應的顏色數組
        // const colorGet = selectedColor ? selectedColor['顏色'] : [];
        const colorGet = colorSetJudge();
        // const colorGet = '配色紅';
        for (let i = 0; i < 次數; i++) {
            const size = 0.005 * i;
            if (i > 0) {
                drawHollowCircle({ 編號: 編號, picX: picX, picY: picY, color: colorGet[2], size: size });
            } else {
                drawHollowCircle({ 編號: 編號, picX: picX, picY: picY, color: colorGet[2], size: size });
            }

        }
        if (type.includes('本命家族') || type.includes('本命月份') || type.includes('本命方位')) {
            drawCircle({ 編號: 編號, picX: picX, picY: picY, color: colorGet[1] });
            const work = "本命";
            const typeSet = type.includes('本命家族') ? '本命家族' : type.includes('本命月份') ? '本命月份' : type.includes('本命方位') ? '本命方位' : '';
            drowTitleMark({ 編號: 編號, picX: picX, picY: picY, type: type, work: work });
            writeText({ 編號: 編號, picX: picX, picY: picY, text: typeSet, type: type, work: work });
        } else {
            drawCircle({ 編號: 編號, picX: picX, picY: picY, color: colorGet[0] });
        }
    }
    for (const t of title) {
        const { picX, picY, type, text } = t;
        const num = parseFloat(t.編號);
        if (chooseNumbers.length === 0) {
            // 繪製空心圓
            drawHollowCircle({ 編號: num, picX, picY });
            // 寫入文字
            writeText({ 編號: num, picX, picY, text, work: "基礎" });
        } else {
            if (!chooseNumbers.includes(num)) {
                // 繪製空心圓
                drawHollowCircle({ 編號: num, picX, picY });
            }
            // 寫入文字
            writeText({ 編號: num, picX, picY, text, work: "基礎" });
        }
    }
}
