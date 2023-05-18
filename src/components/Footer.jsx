import { FaSearch } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container mx-auto text-gray-400 py-16 text-base">
        <div>
          <div className="py-3 text-base underline">
            <a href="#" className="focus:text-red-500">
              Bạn có câu hỏi? liên hệ với chúng tôi.
            </a>
          </div>
          <div className="sm:flex flex-row py-3">
            <div className="flex flex-col underline w-full py-4 leading-8">
              <a href="#" className="focus:text-red-500">
                Câu hỏi thường gặp
              </a>
              <a href="#" className="focus:text-red-500">
                Trung tâm đa phương tiện
              </a>
              <a href="#" className="focus:text-red-500">
                Các cách xem
              </a>
              <a href="#" className="focus:text-red-500">
                Tùy chọn cookie
              </a>
              <a href="#" className="focus:text-red-500">
                Kiểm tra tốc độ
              </a>
            </div>
            <div className="flex flex-col underline w-full py-4 leading-8">
              <a href="#" className="focus:text-red-500">
                Trung tâm trợ giúp
              </a>
              <a href="#" className="focus:text-red-500">
                Quan hệ với nhà đầu tư
              </a>
              <a href="#" className="focus:text-red-500">
                Điều khoản sử dụng
              </a>
              <a href="#" className="focus:text-red-500">
                Thông tin doanh nghiệp
              </a>
              <a href="#" className="focus:text-red-500">
                Thông báo pháp lý
              </a>
            </div>
            <div className="flex flex-col underline w-full py-4 leading-8">
              <a href="#" className="focus:text-red-500">
                Tài khoản
              </a>
              <a href="#" className="focus:text-red-500">
                Việc làm
              </a>
              <a href="#" className="focus:text-red-500">
                Quyền riêng tư
              </a>
              <a href="#" className="focus:text-red-500">
                Liên hệ với chúng tôi
              </a>
              <a href="#" className="focus:text-red-500">
                Chỉ có trên Netflix
              </a>
            </div>
          </div>
          <div>
            <select
              name=""
              id=""
              className="border-2 rounded border-gray-400 bg-transparent text-white py-2 px-4"
            >
              <option selected value="vietnamese">
                Tiếng việt
              </option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] bg-red-600"></div>
    </>
  );
}

export default Footer;
