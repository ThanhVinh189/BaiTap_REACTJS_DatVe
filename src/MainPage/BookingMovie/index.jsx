import Seat from "./Seat";
import { useSelector } from "react-redux";

export default function BookingMovie() {
  const props = useSelector((state) => state.bookingTicketReducer);
  const { listSeats, listSeatsSelected } = props;

  const renderRowIndex = () => {
    const data = listSeats[0];
    return (
      <div className="firstChar">
        <span className="w-8"></span>
        {data.danhSachGhe.map((item) => {
          return (
            <span className="rowNumber" key={item.soGhe}>
              {item.soGhe}
            </span>
          );
        })}
      </div>
    );
  };

  const renderListSeat = () => {
    return listSeats.map((row, index) => {
      if (index === 0) return;

      return (
        <div key={row.hang} className="custom-flex">
          <span className="rowNumber">{row.hang}</span>
          {row.danhSachGhe.map((seat) => (
            <Seat key={seat.soGhe} seat={seat} />
          ))}
        </div>
      );
    });
  };

  const totalPrice = () => {
    return listSeatsSelected.reduce((total, seat) => (total += seat.gia), 0);
  };

  console.log("listSeats", listSeats);

  return (
    <div className="container contain">
      <h1 className="text-booking">Booking Ticket Online</h1>

      <div className="flex">
        <div className="custom-input">
          <div className="screen">Màn Hình</div>
          {/* render ra số thứ tự ghế */}
          {renderRowIndex()}
          {/* render ra danh sách ghế */}
          {renderListSeat()}
        </div>
        <div className="custom-output">
          <h1 className="text-total">Danh sách ghế đang chọn:</h1>
          <div className="seat-info">
            <div className="seat-item">
              <div className="box booked"></div> <span>Ghế đã đặt</span>
            </div>
            <div className="seat-item">
              <div className="box selected"></div> <span>Ghế đang chọn</span>
            </div>
            <div className="seat-item">
              <div className="box available"></div> <span>Ghế chưa chọn</span>
            </div>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Số ghế</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                {listSeatsSelected.map((seat) => (
                  <tr>
                    <td key={seat.soGhe}>{seat.soGhe}</td>
                    <td>{seat.gia}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td className="total-label">Tổng tiền</td>
                  <td className="total-price">{totalPrice()} VNĐ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
