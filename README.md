# GeoAI Hydraulic Dashboard

Dashboard phân tích bảng kết quả nút/hố ga SewerGEMS, thiết kế theo phong cách GeoAI Platform và cấu trúc dự án mẫu.

## Cấu trúc

```text
hydraulic-dashboard/
├── api.py
├── run_with_ngrok.py
├── setup_ngrok.ps1
├── data/Bang thong ke.csv
├── templates/
├── static/css/
├── static/js/
├── tests/test_api.py
└── requirements.txt
```

## Chạy nội bộ

```powershell
python api.py
```

Mở `http://127.0.0.1:8000`.

## Chạy bằng ngrok (Windows PowerShell)

```powershell
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
ngrok config add-authtoken 3IE2kT6G690UGhl6IcW3w6ZoXVQ_5do9TK4828d8uUSQYWZVG
python run_with_ngrok.py
```

Hoặc chạy file thiết lập tự động trước khi mở dashboard:

```powershell
.\setup_ngrok.ps1
python run_with_ngrok.py
```

`run_with_ngrok.py` sử dụng token đã lưu trong cấu hình ngrok. Nếu muốn dùng token khác mà không thay cấu hình, vẫn có thể đặt biến môi trường `NGROK_AUTHTOKEN` trước khi chạy.

Terminal sẽ in ra liên kết HTTPS dạng `https://....ngrok-free.app`. Giữ cửa sổ terminal mở trong suốt thời gian chia sẻ dashboard.

## API

- `GET /api/health`
- `GET /api/summary`
- `GET /api/nodes?risk=Warning&q=196`
- `GET /api/nodes/{id}`
- `GET /api/charts`

Quy tắc cảnh báo: Nguy cấp khi có tràn/ngập hoặc HGL vượt nắp; Cảnh báo khi tỷ lệ đầy ≥ 75% hoặc biên HGL < 0,5 m; các trường hợp còn lại là Bình thường. Cột `Depth (Surcharged)` trong dữ liệu nguồn có cùng giá trị 0,5 m cho toàn bộ 139 nút nên không được dùng riêng để phân loại.
