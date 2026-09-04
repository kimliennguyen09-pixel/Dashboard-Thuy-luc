# GeoAI Hydraulic Dashboard

Dashboard phân tích bảng kết quả nút/hố ga

## Cấu trúc

```text
hydraulic-dashboard/
├── api.py
├── data/Bang thong ke.csv
├── templates/
├── static/css/
├── static/js/
├── tests/test_api.py
└── requirements.txt
```

## Chạy trên nền tảng web

Mở https://dashboard-thuy-luc-1.onrender.com/

## Chạy bằng Render và GitHub
Note: Vì dùng free nên chờ khoảng 1ph để khởi động giao diện

Quy tắc cảnh báo: Nguy cấp khi có tràn/ngập hoặc HGL vượt nắp; Cảnh báo khi tỷ lệ đầy ≥ 75% hoặc biên HGL < 0,5 m; các trường hợp còn lại là Bình thường. Cột `Depth (Surcharged)` trong dữ liệu nguồn có cùng giá trị 0,5 m cho toàn bộ 139 nút nên không được dùng riêng để phân loại.
