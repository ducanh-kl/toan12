/* Bộ câu rất khó (chỉ điền đáp án). Nạp sau extra.js. Dòng: [mức độ, đề, đáp án, sai số, lời giải] */
(function(){
const K="Vận dụng cao · khó";
const A={
dh:[
[K,"Điểm M di động trên đồ thị y = √x, cho A(4; 0). Tìm độ dài AM nhỏ nhất, làm tròn 2 chữ số thập phân.",1.94,.01,"M(x; √x), x ≥ 0: AM² = (x − 4)² + x = x² − 7x + 16. Cực tiểu tại x = 7/2: AM² = 15/4. AM = √15/2 ≈ <b>1,94</b>."],
[K,"Có bao nhiêu số nguyên m để hàm số y = |x³ − 3x² + m| có đúng 5 điểm cực trị?",3,.01,"f = x³ − 3x² + m có cực đại f(0) = m và cực tiểu f(2) = m − 4. |f| có 5 cực trị ⇔ f có 3 nghiệm phân biệt ⇔ m(m − 4) < 0 ⇔ 0 < m < 4. Số nguyên: 1, 2, 3 ⇒ <b>3 giá trị</b>."]
],
tp:[
[K,"Cho f liên tục trên [−1; 1] thỏa f(x) + 2f(−x) = 3x². Tính ∫₋₁¹ f(x)dx (3 chữ số thập phân).",0.667,.002,"Gọi I = ∫₋₁¹ f(x)dx. Vì khoảng lấy tích phân đối xứng nên ∫₋₁¹ f(−x)dx = I. Lấy tích phân hai vế: I + 2I = ∫₋₁¹ 3x²dx = 2 ⇒ <b>I = 2/3 ≈ 0,667</b>."],
[K,"Hàm f(x) > 0 có đạo hàm trên [0; 1], thỏa f′(x) = 2x·f²(x) và f(0) = 1/2. Tính ∫₀¹ f(x)dx (3 chữ số thập phân).",0.623,.002,"(1/f)′ = −f′/f² = −2x ⇒ 1/f = C − x², f(0) = 1/2 ⇒ C = 2 ⇒ f = 1/(2 − x²). ∫₀¹ dx/(2 − x²) = (1/(2√2))·ln((√2 + x)/(√2 − x)) từ 0 đến 1 = ln(1 + √2)/√2 ≈ <b>0,623</b>."],
[K,"Cho f có đạo hàm liên tục, f(2) = 16 và ∫₀² f(x)dx = 10. Tính ∫₀¹ x·f′(2x) dx.",5.5,.01,"Đặt u = 2x: ∫₀¹ x f′(2x)dx = ¼∫₀² u f′(u)du. Từng phần: ∫₀² u f′(u)du = [u f(u)]₀² − ∫₀² f = 32 − 10 = 22. Kết quả 22/4 = <b>5,5</b>."],
[K,"Vật thể có đáy là hình tròn bán kính 3. Mỗi mặt cắt vuông góc với một đường kính cố định là một tam giác đều có cạnh là dây cung của đường tròn đáy. Tính thể tích vật thể, làm tròn 2 chữ số.",62.35,.02,"Đặt đường kính trên Ox, tại x dây cung dài 2√(9 − x²). S(x) = (√3/4)·4(9 − x²) = √3(9 − x²). V = √3∫₋₃³ (9 − x²)dx = √3·36 = 36√3 ≈ <b>62,35</b>."],
[K,"Vật chuyển động có vận tốc v(t) = t² − 6t + 8 (m/s). Tính quãng đường (tổng chiều dài đi được, không phải độ dịch chuyển) từ t = 0 đến t = 5 s, làm tròn 2 chữ số.",9.33,.02,"v = (t − 2)(t − 4): v ≥ 0 trên [0;2] và [4;5], v ≤ 0 trên [2;4]. Với F = t³/3 − 3t² + 8t: F(0) = 0, F(2) = 20/3, F(4) = 16/3, F(5) = 20/3. s = 20/3 + 4/3 + 4/3 = 28/3 ≈ <b>9,33 m</b>."]
],
oxyz:[
[K,"Mặt cầu (S) nằm trong góc phần tám thứ nhất, tiếp xúc cả ba mặt phẳng tọa độ và đi qua A(1; 1; 2). Tính tổng các giá trị có thể của bán kính (S).",4,.01,"Tâm I(R; R; R). IA² = R²: 2(1 − R)² + (2 − R)² = R² ⇒ R² − 4R + 3 = 0 ⇒ R = 1 hoặc R = 3. Tổng = <b>4</b>."],
[K,"Mặt phẳng (P) đi qua M(1; 2; 3) và cắt các tia Ox, Oy, Oz lần lượt tại A, B, C. Tính thể tích nhỏ nhất của tứ diện OABC.",27,.01,"(P): x/a + y/b + z/c = 1 với a, b, c > 0 và 1/a + 2/b + 3/c = 1. Theo AM-GM: 1 ≥ 3·(6/(abc))^(1/3) ⇒ abc ≥ 162. Dấu = khi a = 3, b = 6, c = 9. V = abc/6 = <b>27</b>."]
],
xs:[
[K,"A và B lần lượt gieo một con xúc xắc cân đối, A gieo trước. Ai gieo được mặt 6 chấm trước thì thắng và trò chơi dừng. Tính xác suất A thắng (3 chữ số thập phân).",0.545,.002,"A thắng ở lượt gieo 1, 3, 5, …: P = (1/6)·[1 + (5/6)² + (5/6)⁴ + …] = (1/6)/(1 − 25/36) = <b>6/11 ≈ 0,545</b>."],
[K,"Hộp có 10 đồng xu: 9 đồng cân đối và 1 đồng có hai mặt đều ngửa. Lấy ngẫu nhiên một đồng, tung 3 lần đều ngửa. Tính xác suất lần tung thứ tư cũng ngửa (3 chữ số thập phân).",0.735,.002,"P(3 ngửa) = 0,1·1 + 0,9·(1/8) = 0,2125. P(đồng 2 ngửa | 3 ngửa) = 0,1/0,2125 ≈ 0,4706. P(lần 4 ngửa) = 0,4706·1 + 0,5294·0,5 ≈ <b>0,735</b>."],
[K,"Chọn ngẫu nhiên một số tự nhiên có 4 chữ số đôi một khác nhau. Biết số đó là số chẵn, tính xác suất nó chia hết cho 5 (4 chữ số thập phân).",0.2195,.002,"Số chẵn: tận cùng 0 có 9·8·7 = 504; tận cùng 2, 4, 6, 8 mỗi loại 8·8·7 = 448 ⇒ 1792. Tổng 2296. Chia hết cho 5 và chẵn ⇔ tận cùng 0. P = 504/2296 = 9/41 ≈ <b>0,2195</b>."],
[K,"Cầu thủ đá phạt đền: lần đầu vào với xác suất 0,7. Nếu lần trước vào thì lần sau vào với xác suất 0,8; nếu lần trước trượt thì lần sau vào với xác suất 0,5. Biết lần thứ ba vào lưới, tính xác suất lần thứ nhất cũng vào (3 chữ số thập phân).",0.727,.002,"P(1 vào, 3 vào) = 0,7·(0,8·0,8 + 0,2·0,5) = 0,518. P(1 trượt, 3 vào) = 0,3·(0,5·0,8 + 0,5·0,5) = 0,195. P(3 vào) = 0,713. Kết quả 0,518/0,713 ≈ <b>0,727</b>."],
[K,"Mỗi câu trắc nghiệm, thí sinh biết cách làm với xác suất 0,6 (khi đó chắc chắn đúng); nếu không biết thì chọn bừa 1 trong 4 đáp án. Các câu độc lập. Biết thí sinh đúng cả 3 câu, tính xác suất thí sinh biết cách làm cả 3 câu (3 chữ số thập phân).",0.63,.002,"Mỗi câu đúng với xác suất 0,6 + 0,4·0,25 = 0,7. P(đúng 3 câu) = 0,343. P(biết cả 3 và đúng) = 0,6³ = 0,216. Kết quả 0,216/0,343 ≈ <b>0,630</b>."]
]};
const E=window.EXTRA||(window.EXTRA={});
Object.keys(A).forEach(k=>{E[k]=(E[k]||[]).concat(A[k])});
})();
