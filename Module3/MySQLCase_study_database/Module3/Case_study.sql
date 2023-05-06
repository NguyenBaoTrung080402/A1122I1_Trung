create database Case_study_module3;
use Case_study_module3;
-- drop database case_study_module3;

create table vi_tri(
	ma_vi_tri int primary key,
    ten_vi_tri varchar(45)
);
create table trinh_do(
	ma_trinh_do int primary key,
    ten_trinh_do varchar (45)
);
create table bo_phan(
	ma_bo_phan int primary key,
    ten_bo_phan varchar(45)
);
create table nhan_vien(
	ma_nhan_vien INT primary key,
    ho_ten varchar(45),
    ngay_sinh date,
    so_cmnd varchar (45),
    luong double,
    so_dien_thoai varchar (45),
    email varchar(45),
    dia_chi varchar (45),
    ma_vi_tri int ,
    ma_trinh_do int ,
    ma_bo_phan int,
    FOREIGN KEY (ma_vi_tri) REFERENCES vi_tri(ma_vi_tri),
    FOREIGN KEY (ma_trinh_do) REFERENCES trinh_do(ma_trinh_do),
    FOREIGN KEY (ma_bo_phan) REFERENCES bo_phan(ma_bo_phan)
);
create table loai_khach(
	ma_loai_khach int primary key,
    ten_loai_khach varchar (45)
);
create table khach_hang(
	ma_khach_hang int primary key,
    ma_loai_khach int,
    ho_ten varchar(45),
    ngay_sinh date,
    gioi_tinh Bit(1),
    so_cmnd varchar (45),
    so_dien_thoai varchar(45),
    email varchar(45),
    dia_chi varchar (45),
    FOREIGN KEY (ma_loai_khach) REFERENCES loai_khach(ma_loai_khach)
);
create table hop_dong(
	ma_hop_dong INT primary key,
	ngay_lam_hop_dong DATETIME,
	ngay_ket_thuc DATETIME,
	tien_dat_coc DOUBLE,
	ma_nhan_vien INT,
	ma_khach_hang INT,
	ma_dich_vu INT,
    FOREIGN KEY (ma_nhan_vien) REFERENCES nhan_vien(ma_nhan_vien),
    FOREIGN KEY (ma_khach_hang) REFERENCES khach_hang(ma_khach_hang),
    FOREIGN KEY (ma_dich_vu) REFERENCES dich_vu(ma_dich_vu)
);
create table kieu_thue(
	ma_kieu_thue int primary key,
    ten_kieu_thue varchar(45)
);
create table loai_dich_vu(
	ma_loai_dich_vu int primary key,
    ten_loai_dich_vu varchar(45)
);
create table dich_vu(
	ma_dich_vu INT primary key,
	ten_dich_vu VARCHAR(45),
	dien_tich INT,
	chi_phi_thue DOUBLE,
	so_nguoi_toi_da INT,
	ma_kieu_thue INT,
	ma_loai_dich_vu INT,
	tiêu_chuan_phong VARCHAR(45),
	mo_ta_tien_nghi_khac VARCHAR(45),
	dien_tich_ho_boi DOUBLE,
	so_tang INT,
    FOREIGN KEY (ma_kieu_thue) REFERENCES kieu_thue(ma_kieu_thue),
    FOREIGN KEY (ma_loai_dich_vu) REFERENCES loai_dich_vu(ma_loai_dich_vu)
);
create table hop_dong_chi_tiet(
	ma_hop_dong_chi_tiet INT primary key,
	ma_hop_dong INT,
	ma_dich_vu_di_kem INT,
	so_luong INT,
    FOREIGN KEY (ma_hop_dong) REFERENCES hop_dong(ma_hop_dong),
    FOREIGN KEY (ma_dich_vu_di_kem) REFERENCES dich_vu_di_kem(ma_dich_vu_di_kem)
);
create table dich_vu_di_kem(
	ma_dich_vu_di_kem INT primary key,
	ten_dich_vu_di_kem VARCHAR(45),
	gia DOUBLE,
	don_vi VARCHAR(10),
	trang_thai VARCHAR(45)
);

-- Insert vào bảng vi_tri
INSERT INTO vi_tri (ma_vi_tri, ten_vi_tri) VALUES
(4, 'Marketing'),
(5, 'Nhân viên bảo vệ'),
(6, 'Quản lý sản xuất'),
(7, 'Kỹ thuật viên'),
(8, 'Nhân viên bán hàng'),
(9, 'Lái xe'),
(10, 'Nhân viên dịch vụ khách hàng');

-- Insert vào bảng trinh_do
INSERT INTO trinh_do (ma_trinh_do, ten_trinh_do) VALUES
(1, 'Học việc'),
(2, 'Trung cấp'),
(3, 'Cao đẳng'),
(4, 'Đại học'),
(5, 'Thạc sĩ'),
(6, 'Tiến sĩ'),
(7, 'Không có'),
(8, 'Sơ cấp'),
(9, 'Nghiệp vụ'),
(10, 'Trưởng phòng');

-- Insert vào bảng bo_phan
INSERT INTO bo_phan (ma_bo_phan, ten_bo_phan) VALUES
(1, 'Phòng nhân sự'),
(2, 'Phòng kế toán'),
(3, 'Phòng kho'),
(4, 'Phòng tiếp thị'),
(5, 'Phòng kỹ thuật'),
(6, 'Phòng sản xuất'),
(7, 'Phòng nghiên cứu và phát triển'),
(8, 'Phòng tài chính'),
(9, 'Phòng du lịch'),
(10, 'Phòng quản lý chất lượng');

-- Insert vào bảng nhan_vien
INSERT INTO nhan_vien (ma_nhan_vien, ho_ten, ngay_sinh, so_cmnd, luong, so_dien_thoai, email, dia_chi, ma_vi_tri, ma_trinh_do, ma_bo_phan) VALUES
(1, 'Trần Huyền Trang', '1990-01-01', '123456789', 15000000, '0912345678', 'trantrang@gmail.com', 'Hà Nội', 4, 4, 1),
(2, 'Nguyễn Thanh Tùng', '1985-02-02', '987654321', 20000000, '0987654321', 'tungnguyen@gmail.com', 'Hồ Chí Minh', 5, 5, 2),
(3, 'Lê Hoàng Khánh', '1995-03-03', '111222333', 12000000, '0911112222', 'khanhle@gmail.com', 'Đà Nẵng', 6, 2, 3),
(4, 'Nguyễn Thị Hương', '1992-04-04', '333222111', 18000000, '0945678901', 'huongnguyen@gmail.com', 'Hà Nam', 7, 5, 1),
(5, 'Phạm Văn Thành', '1980-05-05', '111333555', 25000000, '0901234567', 'thanhpham@gmail.com', 'Quảng Trị', 9, 6, 2),
(6, 'Vũ Thị Minh Ngọc', '1991-06-06', '888777666', 14000000, '0987654321', 'ngocvu@gmail.com', 'Hải Phòng', 10, 3, 3),
(7, 'Đỗ Hoàng Tú', '1988-07-07', '777888999', 21000000, '0912345678', 'tudo@gmail.com', 'Huế', 5, 5, 1),
(8, 'Trần Đức Anh', '1994-08-08', '555666777', 13000000, '0987654321', 'anhtran@gmail.com', 'Quảng Nam', 7, 3, 2),
(9, 'Nguyễn Thị Hải Yến', '1997-09-09', '222444666', 11000000, '0911112222', 'yenn@gmail.com', 'Quảng Ngãi', 8, 1, 3),
(10, 'Trần Cẩm Giang', '1997-09-09', '222444666', 11000000, '0911112222', 'Zann@gmail.com', 'Quảng Ngãi', 10, 1, 3);

-- Insert vào bảng loai_khach
INSERT INTO loai_khach (ma_loai_khach, ten_loai_khach) VALUES
(1, 'Nội địa'),
(2, 'Nước ngoài');
INSERT INTO loai_khach (ma_loai_khach, ten_loai_khach) VALUES
(3, 'Diamond'),
(4, 'Platinium'),
(5, 'Gold'),
(6, 'Silver'),
(7, 'Member');

drop table loai_khach;
 
-- Insert vào bảng khach_hang
INSERT INTO khach_hang (ma_khach_hang, ma_loai_khach, ho_ten, ngay_sinh, gioi_tinh, so_cmnd, so_dien_thoai, email, dia_chi) VALUES
(1, 1, 'Nguyễn Thị Hồng', '1995-01-01', 0, '123456789', '0987654321', 'nguyenhong@gmail.com', 'Hà Nội'),
(2, 2, 'John Smith', '1980-02-02', 1, '987654321', '0912345678', 'johnsmith@gmail.com', 'Quảng Bình'),
(3, 1, 'Lê Thị Lan', '1992-03-03', 0, '111222333', '0987654321', 'lelan@gmail.com', 'Hải Phòng'),
(4, 2, 'David Johnson', '1985-04-04', 1, '444555666', '0912345678', 'davidjohnson@gmail.com', 'Quảng Ninh'),
(5, 1, 'Trần Thị Thúy', '1993-05-05', 0, '777888999', '0987654321', 'tranthuy@gmail.com', 'Huế'),
(6, 2, 'Emily Wilson', '1990-06-06', 0, '111111111', '0912345678', 'emilywilson@gmail.com', 'Quảng Trị'),
(7, 1, 'Phạm Thị Hoa', '1988-07-07', 0, '222333444', '0987654321', 'phamhoa@gmail.com', 'Đà Lạt'),
(8, 2, 'Michael Brown', '1987-08-08', 1, '555666777', '0912345678', 'michaelbrown@gmail.com', 'Đà Lạt'),
(9, 1, 'Đỗ Thị Mai', '1991-09-09', 0, '888999000', '0987654321', 'domai@gmail.com', 'Quảng Ninh'),
(10, 1, 'Nguyễn Bảo Trung', '1991-09-09', 0, '888999000', '0987654321', 'Trung@gmail.com', 'Quảng Ngãi');

update khach_hang set ma_loai_khach = '5' where ma_khach_hang = '1';
update khach_hang set ma_loai_khach = '2' where ma_khach_hang = '2';
update khach_hang set ma_loai_khach = '3' where ma_khach_hang = '3';
update khach_hang set ma_loai_khach = '4' where ma_khach_hang = '4';
update khach_hang set ma_loai_khach = '6' where ma_khach_hang = '5';
update khach_hang set ma_loai_khach = '7' where ma_khach_hang = '6';
update khach_hang set ma_loai_khach = '3' where ma_khach_hang = '7';
update khach_hang set ma_loai_khach = '4' where ma_khach_hang = '8';
update khach_hang set ma_loai_khach = '4' where ma_khach_hang = '9';
update khach_hang set ma_loai_khach = '6' where ma_khach_hang = '10';

-- Thêm dữ liệu vào bảng hop_dong
INSERT INTO hop_dong(ma_hop_dong, ngay_lam_hop_dong, ngay_ket_thuc, tien_dat_coc, ma_nhan_vien, ma_khach_hang, ma_dich_vu) VALUES
(1, '2022-01-01', '2022-02-01', 5000000, 1, 1, 1),
(2, '2022-03-01', '2022-04-01', 6000000, 2, 2, 2),
(3, '2022-05-01', '2022-06-01', 7000000, 3, 3, 3);

-- Thêm dữ liệu vào bảng kieu_thue
INSERT INTO kieu_thue (ma_kieu_thue, ten_kieu_thue) VALUES
(1, 'Theo ngày'),
(2, 'Theo giờ'),
(3, 'Theo tuần');

-- Thêm dữ liệu vào bảng loai_dich_vu
INSERT INTO loai_dich_vu (ma_loai_dich_vu, ten_loai_dich_vu) VALUES
(1, 'Villa'),
(2, 'Nhà'),
(3, 'Đất'),
(4, 'Căn hộ'),
(5, 'Khách sạn'),
(6, 'Resort'),
(7, 'Homestay'),
(8, 'Biệt thự'),
(9, 'Cottage'),
(10, 'Motel');

-- Thêm dữ liệu vào bảng dich_vu
INSERT INTO dich_vu (ma_dich_vu, ten_dich_vu, dien_tich, chi_phi_thue, so_nguoi_toi_da, ma_kieu_thue, ma_loai_dich_vu, tiêu_chuan_phong, mo_ta_tien_nghi_khac, dien_tich_ho_boi, so_tang) VALUES
(1, 'Bãi biển đẹp', 100, 5000000, 20, 1, 1, 'Sang trọng', 'View đẹp', 30, 2),
(2, 'Căn hộ cao cấp', 80, 4000000, 10, 2, 2, 'Tiện nghi', 'Bếp đầy đủ', 0, 5),
(3, 'Đất nền', 200, 1000000, 0, 3, 3, NULL, NULL, NULL, NULL),
(4, 'Biệt thự ven sông', 500, 15000000, 30, 1, 1, 'Sang trọng', 'View sông', 50, 3),
(5, 'Căn hộ trung tâm', 60, 3000000, 5, 1, 2, 'Tiện nghi', 'View thành phố', 0, 10),
(6, 'Biệt thự biển', 300, 12000000, 15, 2, 1, 'Sang trọng', 'View biển', 70, 2),
(7, 'Căn hộ giá rẻ', 50, 2000000, 3, 1, 2, 'Cơ bản', 'Giá phải chăng', 0, 3),
(8, 'Phòng trọ', 25, 500000, 2, 3, NULL, 'Cơ bản', 'Không có', 0, 1),
(9, 'Nhà mặt phố', 120, 8000000, 8, 2, 2, 'Sang trọng', 'Nội thất đẹp', 0, 4),
(10, 'Đất nền dự án', 150, 500000, 0, 3, 3, NULL, NULL, NULL, NULL);

-- Thêm dữ liệu vào bảng dich_vu_di_kem
INSERT INTO dich_vu_di_kem (ma_dich_vu_di_kem, ten_dich_vu_di_kem, gia, don_vi, trang_thai) VALUES
(1, 'Phòng gym', 50000, 'Giờ', 'Đang hoạt động'),
(2, 'Xe đạp đôi', 200000, 'Ngày', 'Đang hoạt động'),
(3, 'Xe máy', 500000, 'Ngày', 'Ngừng hoạt động'),
(4, 'Bể bơi', 2000000, 'Giờ', 'Đang hoạt động'),
(5, 'Karaoke', 300000, 'Giờ', 'Đang hoạt động'),
(6, 'Massage', 500000, 'Giờ', 'Đang hoạt động'),
(7, 'Đưa đón sân bay', 1000000, 'Lượt', 'Đang hoạt động'),
(8, 'Phòng họp', 1000000, 'Giờ', 'Đang hoạt động'),
(9, 'Dịch vụ giặt là', 50000, 'Kg', 'Đang hoạt động'),
(10, 'Trà chiều', 100000, 'Người', 'Đang hoạt động');

-- Thêm dữ liệu vào bảng hop_dong_chi_tiet
INSERT INTO hop_dong_chi_tiet(ma_hop_dong_chi_tiet, ma_hop_dong, ma_dich_vu_di_kem, so_luong) VALUES
(1, 1, 1, 2),
(2, 1, 2, 1),
(3, 2, 3, 3),
(4, 3, 2, 2),
(5, 3, 4, 1),
(6, 3, 1, 3),
(7, 2, 2, 2),
(8, 2, 1, 1),
(9, 3, 3, 2),
(10, 1, 4, 1);

-- 2. Hiển thị thông tin của tất cả nhân viên có trong hệ thống có tên bắt đầu là một trong các ký tự “H”, “T” hoặc “K” và có tối đa 15 kí tự
SELECT * FROM nhan_vien 
WHERE ho_ten 
LIKE 'N%' OR ho_ten LIKE 'T%' OR ho_ten LIKE 'Đ%' AND LENGTH(ho_ten) <= 15;

-- 3. Hiển thị thông tin của tất cả khách hàng có độ tuổi từ 18 đến 50 tuổi và có địa chỉ ở “Đà Nẵng” hoặc “Quảng Trị”
SELECT * FROM khach_hang 
WHERE dia_chi LIKE '%Đà Nẵng%' OR dia_chi LIKE '%Hà Nội%'
AND YEAR(CURDATE()) - YEAR(ngay_sinh) BETWEEN 18 AND 50;

-- 4. Đếm xem tương ứng với mỗi khách hàng đã từng đặt phòng bao nhiêu lần. Kết quả hiển thị được sắp xếp tăng dần theo số lần đặt phòng của khách hàng. 
-- Chỉ đếm những khách hàng nào có Tên loại khách hàng là “Diamond”

SELECT khach_hang.ma_khach_hang, khach_hang.ho_ten, COUNT(*) AS so_lan_dat_phong
FROM khach_hang 
INNER JOIN hop_dong ON khach_hang.ma_khach_hang = hop_dong.ma_khach_hang
INNER JOIN loai_khach ON khach_hang.ma_loai_khach = loai_khach.ma_loai_khach
WHERE loai_khach.ten_loai_khach = 'Diamond'
GROUP BY khach_hang.ma_khach_hang, khach_hang.ho_ten
ORDER BY so_lan_dat_phong ASC;

-- 5. Hiển thị ma_khach_hang, ho_ten, ten_loai_khach, ma_hop_dong, ten_dich_vu, ngay_lam_hop_dong, ngay_ket_thuc, 
-- tong_tien (Với tổng tiền được tính theo công thức như sau: Chi Phí Thuê + Số Lượng * Giá, với Số Lượng và Giá là từ bảng dich_vu_di_kem, hop_dong_chi_tiet) 
-- cho tất cả các khách hàng đã từng đặt phòng. (những khách hàng nào chưa từng đặt phòng cũng phải hiển thị ra).

SELECT khach_hang.ma_khach_hang, khach_hang.ho_ten, loai_khach.ten_loai_khach, hop_dong.ma_hop_dong, 
dich_vu_di_kem.ten_dich_vu_di_kem, hop_dong.ngay_lam_hop_dong, hop_dong.ngay_ket_thuc, SUM(hop_dong_chi_tiet.so_luong * dich_vu_di_kem.gia + hop_dong.tien_dat_coc) 
as tong_tien
FROM khach_hang
LEFT JOIN hop_dong ON khach_hang.ma_khach_hang = hop_dong.ma_khach_hang
LEFT JOIN loai_khach ON khach_hang.ma_loai_khach = loai_khach.ma_loai_khach
LEFT JOIN hop_dong_chi_tiet ON hop_dong.ma_hop_dong = hop_dong_chi_tiet.ma_hop_dong
LEFT JOIN dich_vu_di_kem ON hop_dong_chi_tiet.ma_dich_vu_di_kem = dich_vu_di_kem.ma_dich_vu_di_kem
GROUP BY khach_hang.ma_khach_hang, khach_hang.ho_ten, loai_khach.ten_loai_khach, hop_dong.ma_hop_dong, dich_vu_di_kem.ten_dich_vu_di_kem,
 hop_dong.ngay_lam_hop_dong, hop_dong.ngay_ket_thuc;


-- 6. Hiển thị ma_dich_vu, ten_dich_vu, dien_tich, chi_phi_thue, ten_loai_dich_vu 
-- của tất cả các loại dịch vụ chưa từng được khách hàng thực hiện đặt từ quý 1 của năm 2021 (Quý 1 là tháng 1, 2, 3).

SELECT dich_vu.ma_dich_vu, dich_vu.ten_dich_vu, dich_vu.dien_tich, dich_vu.chi_phi_thue, loai_dich_vu.ten_loai_dich_vu 
FROM dich_vu 
INNER JOIN loai_dich_vu ON dich_vu.ma_loai_dich_vu = loai_dich_vu.ma_loai_dich_vu 
WHERE dich_vu.ma_dich_vu NOT IN (
    SELECT hop_dong_chi_tiet.ma_dich_vu_di_kem 
    FROM hop_dong_chi_tiet 
    INNER JOIN hop_dong ON hop_dong_chi_tiet.ma_hop_dong = hop_dong.ma_hop_dong 
    WHERE YEAR(hop_dong.ngay_lam_hop_dong) = 2021 AND MONTH(hop_dong.ngay_lam_hop_dong) IN (1,2,3)
);

-- 7. Hiển thị thông tin ma_dich_vu, ten_dich_vu, dien_tich, so_nguoi_toi_da, chi_phi_thue, 
-- ten_loai_dich_vu của tất cả các loại dịch vụ đã từng được khách hàng đặt phòng trong năm 2020 nhưng chưa từng được khách hàng đặt phòng trong năm 2021.
SELECT dich_vu.ma_dich_vu, dich_vu.ten_dich_vu, dich_vu.dien_tich, dich_vu.so_nguoi_toi_da, dich_vu.chi_phi_thue, loai_dich_vu.ten_loai_dich_vu
FROM dich_vu
INNER JOIN loai_dich_vu ON dich_vu.ma_loai_dich_vu = loai_dich_vu.ma_loai_dich_vu
WHERE dich_vu.ma_dich_vu NOT IN (
    SELECT hop_dong_chi_tiet.ma_dich_vu_di_kem
    FROM hop_dong_chi_tiet
    INNER JOIN hop_dong ON hop_dong_chi_tiet.ma_hop_dong = hop_dong.ma_hop_dong
    WHERE YEAR(hop_dong.ngay_lam_hop_dong) = 2021
)
AND dich_vu.ma_dich_vu IN (
    SELECT hop_dong_chi_tiet.ma_dich_vu_di_kem
    FROM hop_dong_chi_tiet
    INNER JOIN hop_dong ON hop_dong_chi_tiet.ma_hop_dong = hop_dong.ma_hop_dong
    WHERE YEAR(hop_dong.ngay_lam_hop_dong) = 2020
);
-- 8. Hiển thị thông tin ho_ten khách hàng có trong hệ thống, với yêu cầu ho_ten không trùng nhau.
select DISTINCT ho_ten from khach_hang;




