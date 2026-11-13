/* 20 câu vận dụng cao theo dạng đề TN THPT (trả lời ngắn). Mỗi dòng: [mức độ, đề, đáp án, sai số, lời giải] */
const H="Vận dụng cao · dạng đề TN THPT";
window.EXTRA={
dh:[
[H,"Cho hàm số f(x) = x³ − 3x² + m. Tổng giá trị lớn nhất và giá trị nhỏ nhất của f trên đoạn [1; 3] bằng 8. Tìm m.",6,.01,"f′ = 3x² − 6x = 0 ⇒ x = 2 ∈ [1;3]. f(1) = m − 2, f(2) = m − 4, f(3) = m. Max = m, Min = m − 4. Tổng 2m − 4 = 8 ⇒ <b>m = 6</b>."],
[H,"Hình nón nội tiếp mặt cầu bán kính R = 3 (đỉnh và đường tròn đáy nằm trên mặt cầu). Tìm thể tích lớn nhất của khối nón, làm tròn 2 chữ số thập phân.",33.51,.02,"Gọi h là chiều cao: r² = h(2R − h) = h(6 − h). V = (π/3)(6h² − h³). V′ = 0 ⇒ h = 4 (= 4R/3), r² = 8. V = (π/3)·8·4 = 32π/3 ≈ <b>33,51</b>."],
[H,"Có bao nhiêu số nguyên m ∈ [−10; 10] để hàm số y = (mx + 4)/(x + m) đồng biến trên khoảng (1; +∞)?",8,.01,"y′ = (m² − 4)/(x + m)². Đồng biến ⇔ m² − 4 > 0 và −m ∉ (1; +∞) tức −m ≤ 1. m > 2 hoặc m < −2; kết hợp m ≥ −1 ⇒ m > 2. Các số nguyên 3, 4, …, 10: <b>8 giá trị</b>."],
[H,"Một hãng bán x sản phẩm với giá p = 300 − x (nghìn đồng/sản phẩm), chi phí sản xuất C(x) = x² + 60x + 1000 (nghìn đồng). Tìm lợi nhuận lớn nhất (nghìn đồng).",6200,.5,"P = x(300 − x) − (x² + 60x + 1000) = −2x² + 240x − 1000. P′ = −4x + 240 = 0 ⇒ x = 60. P(60) = −7200 + 14400 − 1000 = <b>6200</b>."]
],
tp:[
[H,"Cho hàm số f(x) liên tục trên ℝ và ∫₀⁶ f(x)dx = 12. Tính ∫₀³ [2f(2x) + 1]dx.",15,.01,"Đặt u = 2x: ∫₀³ f(2x)dx = ½∫₀⁶ f(u)du = 6. Vậy ∫₀³ [2f(2x) + 1]dx = 2·6 + 3 = <b>15</b>."],
[H,"Cổng parabol rộng 8 m, cao 6 m. Dựng cửa chữ nhật nội tiếp (hai đỉnh dưới trên mặt đất, hai đỉnh trên chạm parabol). Tìm diện tích lớn nhất của cửa (m²), làm tròn 2 chữ số.",18.48,.02,"Chọn Oxy với đỉnh parabol (0;6): y = 6 − (3/8)x². Cửa có nửa rộng a: S = 2a(6 − 3a²/8) = 12a − (3/4)a³. S′ = 0 ⇒ a² = 16/3. S = a(12 − (3/4)(16/3)) = 8a = 32/√3 ≈ <b>18,48</b>."],
[H,"Hình phẳng giới hạn bởi y = √x và y = x² quay quanh trục Ox. Tính thể tích khối tròn xoay tạo thành, làm tròn 3 chữ số thập phân.",0.9425,.002,"Hai đường cắt nhau tại x = 0 và x = 1; trên (0;1), √x ≥ x². V = π∫₀¹ (x − x⁴)dx = π(1/2 − 1/5) = 3π/10 ≈ <b>0,942</b>."],
[H,"Vật chuyển động có vận tốc v(t) là parabol có đỉnh I(2; 9) và đi qua điểm (0; 5) trên đồ thị v–t (v tính m/s, t tính giây). Tính quãng đường vật đi được từ lúc t = 0 đến khi dừng hẳn (m), làm tròn 2 chữ số.",33.33,.02,"v = a(t − 2)² + 9, v(0) = 4a + 9 = 5 ⇒ a = −1 ⇒ v = −t² + 4t + 5. v = 0 ⇒ t = 5. s = ∫₀⁵ (−t² + 4t + 5)dt = −125/3 + 50 + 25 = 100/3 ≈ <b>33,33 m</b>."]
],
oxyz:[
[H,"Hai trạm A(1; 2; 3) và B(3; 4; 5) ở cùng phía so với mặt đất (mặt phẳng Oxy). Cần đặt trạm trung chuyển C trên mặt đất sao cho CA + CB nhỏ nhất. Tính giá trị nhỏ nhất đó, làm tròn 2 chữ số.",8.49,.01,"Lấy B′ đối xứng B qua Oxy: B′(3; 4; −5). A và B′ khác phía nên CA + CB = CA + CB′ ≥ AB′ = √(4 + 4 + 64) = 6√2 ≈ <b>8,49</b>."],
[H,"Hai ống dẫn nằm trên hai đường thẳng d₁ (qua A(0;0;0), vectơ chỉ phương u = (1;0;0)) và d₂ (qua B(1;2;3), vectơ chỉ phương v = (0;1;1)). Tính khoảng cách giữa d₁ và d₂, làm tròn 3 chữ số.",0.707,.005,"u × v = (0; −1; 1), |u × v| = √2. AB = (1; 2; 3) ⇒ (u × v)·AB = 1. d = 1/√2 ≈ <b>0,707</b>."],
[H,"Cho A(1; 2; 0), B(3; 1; 2), C(2; −1; 1), D(0; 3; 3). Tính thể tích khối tứ diện ABCD, làm tròn 2 chữ số.",3.33,.01,"AB = (2; −1; 2), AC = (1; −3; 1), AD = (−1; 1; 3). AB × AC = (5; 0; −5). (AB × AC)·AD = −5 − 15 = −20. V = |−20|/6 = 10/3 ≈ <b>3,33</b>."],
[H,"Mặt cầu (S) đi qua gốc O và các điểm A(4; 0; 0), B(0; 6; 0), C(0; 0; 12). Tính bán kính của (S).",7,.01,"(S): x² + y² + z² − 2ax − 2by − 2cz = 0 (qua O). Qua A: 16 = 8a ⇒ a = 2. Qua B: 36 = 12b ⇒ b = 3. Qua C: 144 = 24c ⇒ c = 6. R = √(4 + 9 + 36) = <b>7</b>."]
],
tk:[
[H,"Mẫu số liệu ghép nhóm về cân nặng 50 bạn (kg): [40;50): 5; [50;60): 15; [60;70): 20; [70;80): 10. Tính độ lệch chuẩn của mẫu (lấy giá trị đại diện giữa nhóm).",9,.01,"Đại diện 45; 55; 65; 75. x̄ = 3100/50 = 62. Σnx² = 196250 ⇒ s² = 3925 − 62² = 81 ⇒ <b>s = 9</b>."],
[H,"Với mẫu cân nặng 50 bạn ở câu trước, tính khoảng tứ phân vị Δ_Q.",13.75,.02,"Q₁: n/4 = 12,5 thuộc [50;60): Q₁ = 50 + (12,5 − 5)/15·10 = 55. Q₃: 37,5 thuộc [60;70): Q₃ = 60 + (37,5 − 20)/20·10 = 68,75. <b>Δ_Q = 13,75</b>."],
[H,"Lớp A có 20 học sinh, điểm trung bình 7, phương sai 1. Lớp B có 30 học sinh, điểm trung bình 8, phương sai 0,5. Tính phương sai điểm của cả 50 học sinh.",0.94,.01,"x̄ = (140 + 240)/50 = 7,6. Phương sai chung = [20(1 + 0,6²) + 30(0,5 + 0,4²)]/50 = (27,2 + 19,8)/50 = <b>0,94</b>."],
[H,"Mẫu gồm 8 số có trung bình 5 và phương sai 4. Thêm hai số 3 và 9 vào mẫu. Tính phương sai mới, làm tròn 2 chữ số.",5.16,.01,"Σx² cũ = 8(4 + 25) = 232. Mẫu mới (10 số): Σx = 52 ⇒ x̄ = 5,2; Σx² = 232 + 9 + 81 = 322. s² = 32,2 − 5,2² = 32,2 − 27,04 = <b>5,16</b>."]
],
xs:[
[H,"Ba máy sản xuất lần lượt 50%, 30%, 20% sản phẩm với tỉ lệ lỗi 1%, 2%, 3%. Lấy ngẫu nhiên một sản phẩm thấy bị lỗi. Tính xác suất nó do máy thứ ba sản xuất (3 chữ số thập phân).",0.353,.002,"P(lỗi) = 0,005 + 0,006 + 0,006 = 0,017. P(máy 3 | lỗi) = 0,006/0,017 ≈ <b>0,353</b>."],
[H,"Hộp có 6 bi đỏ, 4 bi xanh. Lấy lần lượt 2 bi không hoàn lại. Biết bi thứ hai là bi xanh, tính xác suất bi thứ nhất là bi đỏ (3 chữ số thập phân).",0.667,.002,"P(thứ 2 xanh) = 0,4. P(đỏ rồi xanh) = 6/10·4/9 = 4/15. Xác suất cần tìm = (4/15)/(2/5) = <b>2/3 ≈ 0,667</b>."],
[H,"Hộp I có 4 bi đỏ, 6 bi trắng; hộp II có 5 bi đỏ, 5 bi trắng. Lấy ngẫu nhiên 2 bi từ hộp I bỏ sang hộp II, rồi lấy ngẫu nhiên 1 bi từ hộp II. Tính xác suất bi lấy ra là bi đỏ (3 chữ số thập phân).",0.483,.002,"Số bi đỏ chuyển sang: 0 bi (xs 15/45), 1 bi (24/45), 2 bi (6/45). Hộp II có 12 bi, số đỏ 5, 6, 7. P = (1/3)(5/12) + (8/15)(6/12) + (2/15)(7/12) = 29/60 ≈ <b>0,483</b>."],
[H,"Xạ thủ bắn tối đa 3 lần vào bia, mỗi lần trúng với xác suất 0,6 (các lần độc lập), dừng ngay khi trúng. Biết xạ thủ đã trúng bia, tính xác suất anh ta trúng ngay ở lần bắn đầu (3 chữ số thập phân).",0.641,.002,"P(trúng ít nhất 1 lần) = 1 − 0,4³ = 0,936. P(trúng lần 1 | đã trúng) = 0,6/0,936 ≈ <b>0,641</b>."]
]};
