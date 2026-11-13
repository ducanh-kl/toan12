/* Ngân hàng bài tập: nhập đáp án số, bấm "Xem đáp án" để kiểm tra */
(function(){
const VD="Vận dụng",VDC="Vận dụng cao";
const BANK={
dh:[
[VD,"Bể cá hình hộp chữ nhật đáy vuông, không nắp, thể tích 32 m³. Tìm diện tích kính (m²) nhỏ nhất cần dùng.",48,.01,"Cạnh đáy x, cao h = 32/x². S = x² + 4xh = x² + 128/x. S′ = 2x − 128/x² = 0 ⇒ x = 4. S(4) = 16 + 32 = <b>48 m²</b>."],
[VDC,"Lon hình trụ kín có thể tích 54π cm³. Tìm bán kính đáy r (cm) để tốn ít vật liệu nhất.",3,.01,"h = 54π/(πr²) = 54/r². S = 2πr² + 2πrh = 2πr² + 108π/r. S′ = 4πr − 108π/r² = 0 ⇒ r³ = 27 ⇒ <b>r = 3 cm</b> (khi đó h = 6 = 2r)."],
[VDC,"Người ở thuyền A cách bờ thẳng 3 km, hình chiếu của A lên bờ là H. Muốn đến B trên bờ với HB = 8 km: chèo thuyền đến C trên bờ (vận tốc 4 km/h) rồi chạy bộ đến B (5 km/h). Tìm thời gian ngắn nhất (giờ).",2.05,.01,"Đặt HC = x. T(x) = √(9+x²)/4 + (8−x)/5. T′ = x/(4√(9+x²)) − 1/5 = 0 ⇒ 5x = 4√(9+x²) ⇒ 9x² = 144 ⇒ x = 4. T(4) = 5/4 + 4/5 = <b>2,05 giờ</b>."],
[VDC,"Nồng độ thuốc trong máu sau t giờ là C(t) = 10t/(t² + 4) (mg/L), t ≥ 0. Tìm nồng độ lớn nhất (mg/L).",2.5,.01,"C′ = 10(4 − t²)/(t²+4)² = 0 ⇒ t = 2. C đổi dấu + sang − nên C(2) = 20/8 = <b>2,5 mg/L</b>. (Khi t → ∞ thì C → 0: tiệm cận ngang y = 0.)"],
[VDC,"Thang dựa vào tường nhà phải vượt qua hàng rào cao 2,7 m, hàng rào cách tường 6,4 m (thang chạm đất, qua đỉnh hàng rào, tựa vào tường). Tìm chiều dài ngắn nhất của thang (m).",12.5,.01,"Gọi θ là góc thang với mặt đất: L = 2,7/sin θ + 6,4/cos θ. L′ = 0 ⇒ tan³θ = 2,7/6,4 = 27/64 ⇒ tan θ = 3/4 ⇒ sin θ = 3/5, cos θ = 4/5. L = 2,7·5/3 + 6,4·5/4 = 4,5 + 8 = <b>12,5 m</b>."]
],
tp:[
[VD,"Bể chứa ban đầu rỗng. Nước chảy vào với tốc độ r(t) = 8t − t² (m³/giờ), t ≥ 0, cho đến khi tốc độ bằng 0 thì ngừng. Tính tổng lượng nước (m³) đã chảy vào, làm tròn 2 chữ số thập phân.",85.33,.02,"r = 0 ⇒ t = 8. V = ∫₀⁸ (8t − t²)dt = [4t² − t³/3]₀⁸ = 256 − 512/3 = 256/3 ≈ <b>85,33 m³</b>."],
[VD,"Xe chạy 20 m/s, tài xế thấy vật cản và mất 0,6 s phản ứng (vẫn chạy đều), sau đó phanh với v(t) = 20 − 5t. Tính tổng quãng đường (m) từ lúc thấy vật cản đến khi dừng hẳn.",52,.01,"Phản ứng: 20·0,6 = 12 m. Phanh: v = 0 ⇒ t = 4, s = ∫₀⁴(20 − 5t)dt = 80 − 40 = 40 m. Tổng = <b>52 m</b>. (Nếu vật cản cách 50 m thì đã va chạm!)"],
[VD,"Tấm kính giới hạn bởi hai parabol y = x² và y = 8 − x² (đơn vị m). Tính diện tích (m²), làm tròn 2 chữ số.",21.33,.02,"x² = 8 − x² ⇒ x = ±2. S = ∫₋₂² (8 − 2x²)dx = 2·[8x − 2x³/3]₀² = 2·(16 − 16/3) = 64/3 ≈ <b>21,33 m²</b>."],
[VDC,"Chiếc bát có mặt trong là mặt tròn xoay sinh bởi cung parabol y = x² (0 ≤ x ≤ 2, đơn vị dm) quay quanh trục Oy. Tính dung tích (lít), làm tròn 2 chữ số. (1 dm³ = 1 lít)",25.13,.02,"x² = y nên V = π∫₀⁴ y dy = π·[y²/2]₀⁴ = <b>8π ≈ 25,13 lít</b>. (Chú ý: quay quanh Oy thì tích phân theo y.)"],
[VDC,"Dân số một thị trấn tăng với tốc độ P′(t) = 1000·e^(0,02t) người/năm (t tính bằng năm). Dân số tăng thêm bao nhiêu người sau 10 năm đầu? (làm tròn đến hàng đơn vị)",11070,2,"ΔP = ∫₀¹⁰ 1000e^(0,02t)dt = 1000/0,02·(e^0,2 − 1) = 50000·0,2214028 ≈ <b>11 070 người</b>."]
],
oxyz:[
[VD,"Radar đặt tại gốc O. Máy bay bay thẳng qua A(1; 2; 2) với vectơ chỉ phương u = (2; −2; 1). Tính khoảng cách ngắn nhất từ radar đến đường bay.",3,.01,"d = |OA × u| / |u|. OA × u = (2·1 − 2·(−2); 2·2 − 1·1; 1·(−2) − 2·2) = (6; 3; −6), độ dài 9. |u| = 3 ⇒ <b>d = 3</b>."],
[VD,"Quả bóng hình cầu tâm I(1; 2; 3) vừa chạm trần nhà (P): 2x + 2y − z − 9 = 0. Tính bán kính quả bóng.",2,.01,"Tiếp xúc ⇔ R = d(I,(P)) = |2 + 4 − 3 − 9| / √(4+4+1) = 6/3 = <b>2</b>."],
[VDC,"Cho A(1;0;0), B(0;2;0), C(0;0;3). Tính khoảng cách từ O đến mặt phẳng (ABC), làm tròn 3 chữ số thập phân.",0.857,.005,"Phương trình đoạn chắn: x/1 + y/2 + z/3 = 1 ⇔ 6x + 3y + 2z − 6 = 0. d(O,(ABC)) = 6/√(36+9+4) = <b>6/7 ≈ 0,857</b>."],
[VD,"Mặt cầu (S): x² + y² + z² − 2x + 4y − 6z − 11 = 0 mô tả vùng phủ sóng. Tính bán kính R.",5,.01,"Tâm I(1; −2; 3). R² = 1 + 4 + 9 − (−11) = 25 ⇒ <b>R = 5</b>."],
[VDC,"Mặt phẳng (P): x + 2y + 2z − 9 = 0 cắt quả cầu tâm O bán kính 5 theo một đường tròn. Tính bán kính đường tròn đó.",4,.01,"d(O,(P)) = 9/3 = 3. r = √(R² − d²) = √(25 − 9) = <b>4</b>."]
],
tk:[
[VD,"Điểm 8 bài kiểm tra: 2, 4, 4, 4, 5, 5, 7, 9. Tính độ lệch chuẩn.",2,.01,"x̄ = 40/8 = 5. Σ(x − x̄)² = 9+1+1+1+0+0+4+16 = 32 ⇒ s² = 4 ⇒ <b>s = 2</b>."],
[VDC,"Thời gian chạy 20 bạn (giây): [0;5): 3 bạn; [5;10): 7 bạn; [10;15): 6 bạn; [15;20): 4 bạn. Tính phương sai (lấy giá trị đại diện giữa nhóm), làm tròn 2 chữ số.",23.69,.02,"Đại diện: 2,5; 7,5; 12,5; 17,5. x̄ = 205/20 = 10,25. Σnx² = 2575 ⇒ s² = 2575/20 − 10,25² = 128,75 − 105,0625 ≈ <b>23,69</b>."],
[VDC,"Cùng bảng số liệu trên (20 bạn), tính khoảng tứ phân vị Δ_Q của mẫu ghép nhóm, làm tròn 2 chữ số.",7.74,.02,"Q₁: n/4 = 5 thuộc nhóm [5;10): Q₁ = 5 + (5 − 3)/7·5 ≈ 6,43. Q₃: 15 thuộc nhóm [10;15): Q₃ = 10 + (15 − 10)/6·5 ≈ 14,17. <b>Δ_Q ≈ 7,74</b>."],
[VDC,"Mẫu số liệu có độ lệch chuẩn 4. Mỗi giá trị được nhân 3 rồi cộng 5. Độ lệch chuẩn mới bằng bao nhiêu?",12,.01,"Cộng hằng số không đổi độ phân tán; nhân 3 thì độ lệch chuẩn nhân 3: <b>s′ = 3·4 = 12</b> (phương sai nhân 9 = 144)."],
[VDC,"5 số có trung bình 10 và phương sai 4. Thêm số thứ 6 bằng 10. Tính phương sai mới, làm tròn 2 chữ số.",3.33,.01,"Trung bình vẫn 10. Σ(x − 10)² cũ = 5·4 = 20; số mới góp 0. s² mới = 20/6 ≈ <b>3,33</b>."]
],
xs:[
[VD,"Hộp 1 có 5 bi đỏ, 3 bi xanh; hộp 2 có 2 bi đỏ, 6 bi xanh. Chọn ngẫu nhiên một hộp rồi lấy một bi, được bi đỏ. Tính xác suất bi đó lấy từ hộp 1 (làm tròn 3 chữ số).",0.714,.002,"P(đỏ) = ½·5/8 + ½·2/8 = 7/16. P(hộp 1 | đỏ) = (5/16)/(7/16) = <b>5/7 ≈ 0,714</b>."],
[VD,"Hai xạ thủ bắn độc lập, xác suất trúng của A là 0,8 và của B là 0,7. Biết có đúng một người trúng, tính xác suất người đó là A (3 chữ số thập phân).",0.632,.002,"P(đúng một trúng) = 0,8·0,3 + 0,2·0,7 = 0,38. P(A trúng | đúng một) = 0,24/0,38 ≈ <b>0,632</b>."],
[VDC,"30% thư là spam. Từ \"khuyến mãi\" xuất hiện trong 60% thư spam và 5% thư thường. Thư có từ này, tính xác suất là spam (3 chữ số thập phân).",0.837,.002,"P(từ) = 0,3·0,6 + 0,7·0,05 = 0,215. P(spam | từ) = 0,18/0,215 ≈ <b>0,837</b>."],
[VDC,"Trò chơi 3 cửa: sau 1 cửa có xe, 2 cửa có dê. Bạn chọn cửa 1, người dẫn mở một cửa có dê (khác cửa bạn chọn), rồi cho bạn đổi cửa. Xác suất thắng xe nếu bạn luôn đổi? (3 chữ số thập phân)",0.667,.002,"Đổi thắng ⇔ ban đầu chọn trúng dê, xác suất 2/3. Không đổi thắng chỉ 1/3. Đáp án <b>2/3 ≈ 0,667</b>."],
[VDC,"Dùng số liệu bài xét nghiệm (1% mắc bệnh, nhạy 95%, dương tính giả 5%). Làm xét nghiệm 2 lần độc lập, cả hai đều dương tính. Xác suất thực sự bệnh? (3 chữ số thập phân)",0.785,.002,"Tử: 0,01·0,95² = 0,009025. Mẫu: 0,009025 + 0,99·0,05² = 0,009025 + 0,002475 = 0,0115. P = <b>≈ 0,785</b>, tăng mạnh từ 16% sau lần 1."]
]};
const EX=window.EXTRA||{};Object.keys(EX).forEach(k=>{BANK[k]=BANK[k].concat(EX[k])});
const css=document.createElement("style");
css.textContent=".q{border:2px solid var(--ink);border-radius:10px;background:#fff;padding:14px 16px;margin:14px 0}.q p{margin:4px 0 10px}.lv{display:inline-block;border-radius:6px;padding:1px 10px;font-size:.82rem;font-weight:700;color:#fff;background:var(--blue);margin-right:8px}.lv.hard{background:var(--red)}.q input{font:inherit;padding:6px 10px;border:2px solid var(--ink);border-radius:8px;width:160px}.q button{font:inherit;font-weight:700;padding:7px 16px;border:2px solid var(--ink);border-radius:8px;background:var(--sun);cursor:pointer;margin-left:8px}.q button:focus-visible{outline:3px solid var(--blue)}.res{margin-top:10px;border-radius:8px;padding:10px 14px}.res.ok{background:var(--mint)}.res.no{background:#fde4e6}.hint{font-size:.9rem;color:#46557a}.score{font-weight:700;margin:8px 0}";
document.head.appendChild(css);
const num=v=>{v=v.trim().replace(/,/g,".");const m=v.match(/^(-?[\d.]+)\s*\/\s*([\d.]+)$/);return m?parseFloat(m[1])/parseFloat(m[2]):parseFloat(v)};
Object.keys(BANK).forEach(id=>{
 const sec=document.getElementById(id);if(!sec)return;
 const wrap=document.createElement("div");
 wrap.innerHTML='<h3 style="margin-top:34px;font-size:1.4rem">Luyện tập: '+BANK[id].length+' câu</h3><p class="hint">Tự giải ra giấy, nhập kết quả (số hoặc phân số a/b). Nút xem đáp án chỉ hiện sau khi bạn nhập.</p><div class="score"></div>';
 const sc=wrap.querySelector(".score");let done=0,right=0;
 BANK[id].forEach((p,i)=>{
  const q=document.createElement("div");q.className="q";
  q.innerHTML='<span class="lv'+(p[0].indexOf('cao')>-1?' hard':'')+'">'+p[0]+'</span><b>Câu '+(i+1)+'.</b><p>'+p[1]+'</p><label>Đáp án của bạn: <input type="text" inputmode="decimal" autocomplete="off"></label><button type="button" hidden>Xem đáp án</button><div class="res" hidden></div>';
  const inp=q.querySelector("input"),btn=q.querySelector("button"),res=q.querySelector(".res");
  inp.oninput=()=>{if(!res.hidden)return;btn.hidden=!inp.value.trim()};
  inp.onkeydown=e=>{if(e.key==="Enter"&&!btn.hidden)btn.click()};
  btn.onclick=()=>{
   const x=num(inp.value),ok=isFinite(x)&&Math.abs(x-p[2])<=p[3];
   res.hidden=false;res.className="res "+(ok?"ok":"no");
   res.innerHTML=(ok?"<b>Chính xác!</b> ":"<b>Chưa đúng</b> (bạn nhập "+inp.value.trim()+"). ")+"<br><b>Lời giải:</b> "+p[4];
   inp.disabled=true;btn.hidden=true;done++;if(ok)right++;
   sc.textContent="Đã làm "+done+"/"+BANK[id].length+" câu, đúng "+right+".";
  };
  wrap.appendChild(q);
 });
 sec.appendChild(wrap);
});
})();
