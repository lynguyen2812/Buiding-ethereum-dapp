# Reading Report: Building Ethereum Dapps — Chapters 1 & 2

**Đề tài:** Web3 Freelance Platform  
**Nguồn chính:** Roberto Infante (2019), *Building Ethereum Dapps*, Manning.

- [Đọc báo cáo ngắn gọn](BAO_CAO_NGAN.md)
- [Source code gốc SimpleCoin — Chương 1](code/chapter1/SimpleCoin_Original_2019.sol)
- [SimpleCoin hiện đại — có thêm bảo vệ và event (code bổ sung)](code/chapter1/SimpleCoin_Modern.sol)
- [Ví dụ JSON-RPC Chương 2 (code bổ sung)](code/chapter2/json_rpc_demo.mjs)

## Chạy source code Chương 1 trên Remix

1. Mở https://remix.ethereum.org/ và tạo file `.sol`.
2. Để xem **mã nguyên gốc năm 2019**, chọn `SimpleCoin_Original_2019.sol` và compiler Solidity **0.4.24** (chỉ dùng để tham khảo/thử nghiệm). Mã này không bảo vệ khi chuyển vượt số dư. Một số phiên bản Remix mới có thể không còn hỗ trợ compiler cũ thuận tiện.
3. **Khuyến nghị thực hành:** chọn `SimpleCoin_Modern.sol`, compiler **0.8.20+ (<0.9.0)** và môi trường **Remix VM**.
4. Deploy từ tài khoản A; gọi `coinBalance(A)` để thấy 10000.
5. Gọi `transfer(B, 150)` bằng tài khoản A, rồi kiểm tra `coinBalance(A) = 9850` và `coinBalance(B) = 150`.
6. Thử chuyển nhiều hơn số dư để quan sát giao dịch bị revert trong phiên bản hiện đại.

## Chạy minh họa JSON-RPC Chương 2

Cần Node.js >= 18 và một địa chỉ endpoint JSON-RPC của mạng thử nghiệm (ví dụ Sepolia). Đoạn code chỉ **đọc dữ liệu**, không chuyển tiền.

