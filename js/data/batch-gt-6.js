// Đợt 6 chủ đề giao tiếp (C1–C2): khoa học & công nghệ mới, pháp luật, kinh tế toàn cầu, văn viết trang trọng.
export const batch = {
  track: 'giao-tiep',
  topics: [
    {
      id: 'khoa-hoc-cong-nghe-moi', title: 'Khoa học & công nghệ mới', icon: '🤖', level: 'C1',
      desc: 'Trí tuệ nhân tạo, đổi mới sáng tạo, quyền riêng tư dữ liệu, đạo đức công nghệ.',
      words: [
        ['artificial intelligence', 'trí tuệ nhân tạo', 'Artificial intelligence is transforming healthcare.', 'Trí tuệ nhân tạo đang làm thay đổi ngành y tế.'],
        ['machine learning', 'học máy', 'Machine learning algorithms learn from data.', 'Thuật toán học máy học từ dữ liệu.'],
        ['algorithm', 'thuật toán', 'The algorithm recommends videos to users.', 'Thuật toán gợi ý video cho người dùng.'],
        ['automation', 'tự động hóa', 'Automation may replace routine jobs.', 'Tự động hóa có thể thay thế các công việc lặp lại.'],
        ['robotics', 'ngành robot học', 'Robotics is advancing rapidly.', 'Ngành robot đang tiến bộ nhanh chóng.'],
        ['breakthrough', 'bước đột phá', 'Scientists announced a major breakthrough.', 'Các nhà khoa học công bố một bước đột phá lớn.'],
        ['innovation', 'sự đổi mới', 'Innovation drives economic growth.', 'Đổi mới thúc đẩy tăng trưởng kinh tế.'],
        ['cutting-edge', 'tiên tiến nhất', 'The lab uses cutting-edge technology.', 'Phòng thí nghiệm dùng công nghệ tiên tiến nhất.'],
        ['disruptive', 'mang tính đột phá', 'Disruptive technologies change entire industries.', 'Công nghệ đột phá làm thay đổi cả ngành.'],
        ['revolutionize', 'làm cách mạng hóa', 'The internet revolutionized communication.', 'Internet đã cách mạng hóa giao tiếp.'],
        ['prototype', 'mẫu thử', 'They built a working prototype.', 'Họ chế tạo được mẫu thử hoạt động.'],
        ['patent', 'bằng sáng chế', 'The company filed a patent for the device.', 'Công ty nộp bằng sáng chế cho thiết bị.'],
        ['research and development', 'nghiên cứu và phát triển', 'Research and development costs are high.', 'Chi phí nghiên cứu và phát triển rất cao.'],
        ['quantum computing', 'điện toán lượng tử', 'Quantum computing could solve complex problems.', 'Điện toán lượng tử có thể giải các bài toán phức tạp.'],
        ['blockchain', 'chuỗi khối', 'Blockchain records transactions securely.', 'Chuỗi khối ghi lại giao dịch một cách an toàn.'],
        ['cryptocurrency', 'tiền mã hóa', 'Cryptocurrency prices can change dramatically.', 'Giá tiền mã hóa có thể biến động mạnh.'],
        ['cloud computing', 'điện toán đám mây', 'Cloud computing reduces hardware costs.', 'Điện toán đám mây giảm chi phí phần cứng.'],
        ['big data', 'dữ liệu lớn', 'Big data helps companies understand customers.', 'Dữ liệu lớn giúp công ty hiểu khách hàng.'],
        ['data analysis', 'phân tích dữ liệu', 'Data analysis revealed a clear pattern.', 'Phân tích dữ liệu chỉ ra một quy luật rõ ràng.'],
        ['cybersecurity', 'an ninh mạng', 'Cybersecurity is a growing concern.', 'An ninh mạng là mối quan tâm ngày càng lớn.'],
        ['encryption', 'mã hóa', 'Encryption protects private messages.', 'Mã hóa bảo vệ tin nhắn riêng tư.'],
        ['data breach', 'rò rỉ dữ liệu', 'A data breach exposed millions of accounts.', 'Một vụ rò rỉ dữ liệu làm lộ hàng triệu tài khoản.'],
        ['privacy', 'quyền riêng tư', 'Online privacy is under threat.', 'Quyền riêng tư trực tuyến đang bị đe dọa.'],
        ['surveillance', 'sự giám sát', 'Mass surveillance raises serious concerns.', 'Giám sát hàng loạt làm dấy lên mối lo nghiêm trọng.'],
        ['facial recognition', 'nhận diện khuôn mặt', 'Facial recognition is used at airports.', 'Nhận diện khuôn mặt được dùng ở sân bay.'],
        ['consent', 'sự đồng ý', 'Users must give consent before data is collected.', 'Người dùng phải đồng ý trước khi dữ liệu được thu thập.'],
        ['transparency', 'tính minh bạch', 'We need transparency about how algorithms work.', 'Chúng ta cần minh bạch về cách thuật toán hoạt động.'],
        ['bias', 'thiên lệch', 'AI systems can inherit human bias.', 'Hệ thống AI có thể thừa hưởng thiên lệch của con người.'],
        ['ethical', 'thuộc đạo đức', 'There are serious ethical questions about AI.', 'Có những câu hỏi đạo đức nghiêm trọng về AI.'],
        ['accountability', 'trách nhiệm giải trình', 'Accountability is essential when machines make decisions.', 'Trách nhiệm giải trình là thiết yếu khi máy móc đưa ra quyết định.'],
        ['regulate', 'điều chỉnh bằng luật', 'Governments try to regulate new technologies.', 'Các chính phủ cố điều chỉnh các công nghệ mới.'],
        ['misinformation', 'thông tin sai lệch', 'Algorithms can spread misinformation.', 'Thuật toán có thể lan truyền thông tin sai lệch.'],
        ['deepfake', 'video giả mạo bằng AI', 'A deepfake video looked completely real.', 'Một video giả mạo bằng AI trông hoàn toàn thật.'],
        ['digital divide', 'khoảng cách số', 'The digital divide separates rich and poor regions.', 'Khoảng cách số chia cắt vùng giàu và nghèo.'],
        ['addiction', 'sự nghiện', 'Technology addiction affects mental health.', 'Nghiện công nghệ ảnh hưởng đến sức khỏe tinh thần.'],
        ['virtual reality', 'thực tế ảo', 'Virtual reality is used for training surgeons.', 'Thực tế ảo được dùng để huấn luyện bác sĩ phẫu thuật.'],
        ['augmented reality', 'thực tế tăng cường', 'Augmented reality adds digital images to the real world.', 'Thực tế tăng cường thêm hình ảnh số vào thế giới thật.'],
        ['wearable', 'thiết bị đeo', 'A wearable device tracks your heart rate.', 'Thiết bị đeo theo dõi nhịp tim của bạn.'],
        ['smart home', 'nhà thông minh', 'A smart home controls lights by voice.', 'Nhà thông minh điều khiển đèn bằng giọng nói.'],
        ['self-driving', 'tự lái', 'Self-driving cars may reduce accidents.', 'Xe tự lái có thể giảm tai nạn.'],
        ['renewable energy', 'năng lượng tái tạo', 'Renewable energy is becoming cheaper.', 'Năng lượng tái tạo ngày càng rẻ.'],
        ['gene editing', 'chỉnh sửa gen', 'Gene editing raises ethical debates.', 'Chỉnh sửa gen gây ra các cuộc tranh luận đạo đức.'],
        ['biotechnology', 'công nghệ sinh học', 'Biotechnology is changing medicine.', 'Công nghệ sinh học đang thay đổi y học.'],
        ['nanotechnology', 'công nghệ nano', 'Nanotechnology works at the scale of atoms.', 'Công nghệ nano hoạt động ở quy mô nguyên tử.'],
        ['space exploration', 'khám phá vũ trụ', 'Space exploration inspires young scientists.', 'Khám phá vũ trụ truyền cảm hứng cho các nhà khoa học trẻ.'],
        ['obsolete', 'lỗi thời', 'Many skills may become obsolete.', 'Nhiều kỹ năng có thể trở nên lỗi thời.'],
        ['adapt', 'thích nghi', 'Workers must adapt to technological change.', 'Người lao động phải thích nghi với thay đổi công nghệ.'],
        ['reskill', 'đào tạo lại kỹ năng', 'Companies need to reskill their staff.', 'Các công ty cần đào tạo lại kỹ năng cho nhân viên.'],
        ['pros and cons', 'ưu và nhược điểm', 'We must weigh the pros and cons of AI.', 'Chúng ta phải cân nhắc ưu và nhược điểm của AI.'],
        ['double-edged sword', 'con dao hai lưỡi', 'Technology is a double-edged sword.', 'Công nghệ là con dao hai lưỡi.'],
      ],
      patterns: [
        ['Artificial intelligence has the potential to transform almost every industry.', 'Trí tuệ nhân tạo có tiềm năng làm thay đổi hầu hết mọi ngành.'],
        ['Critics argue that automation will lead to widespread unemployment.', 'Những người chỉ trích cho rằng tự động hóa sẽ dẫn đến thất nghiệp lan rộng.'],
        ['The use of personal data raises serious questions about privacy and consent.', 'Việc sử dụng dữ liệu cá nhân đặt ra những câu hỏi nghiêm trọng về quyền riêng tư và sự đồng ý.'],
        ['It remains to be seen whether regulation can keep pace with innovation.', 'Vẫn còn phải xem liệu luật pháp có theo kịp đổi mới hay không.'],
        ['Technology is neither good nor bad in itself; it depends on how we use it.', 'Bản thân công nghệ không tốt cũng không xấu; điều đó phụ thuộc vào cách chúng ta dùng.'],
      ],
      dialogue: [
        ['A', 'Do you think artificial intelligence will take our jobs?', 'Bạn có nghĩ trí tuệ nhân tạo sẽ lấy mất việc của chúng ta không?'],
        ['B', 'Some routine jobs will disappear, but new ones will be created.', 'Một số việc lặp lại sẽ biến mất, nhưng việc mới sẽ xuất hiện.'],
        ['A', 'That is only true if workers can reskill quickly.', 'Điều đó chỉ đúng nếu người lao động học lại kỹ năng đủ nhanh.'],
        ['B', 'Exactly. Governments and companies need to invest in training.', 'Chính xác. Chính phủ và doanh nghiệp cần đầu tư vào đào tạo.'],
        ['A', 'And what about privacy? These systems collect so much data.', 'Còn quyền riêng tư thì sao? Những hệ thống này thu thập quá nhiều dữ liệu.'],
        ['B', 'That is why we need strong regulation and transparency.', 'Vì thế chúng ta cần luật pháp chặt chẽ và sự minh bạch.'],
      ],
    },
    {
      id: 'phap-luat', title: 'Pháp luật & quyền lợi', icon: '⚖️', level: 'C1',
      desc: 'Hệ thống pháp luật, tòa án, hợp đồng, quyền công dân và thủ tục pháp lý.',
      words: [
        ['law', 'luật', 'No one is above the law.', 'Không ai đứng trên pháp luật.'],
        ['legal', 'hợp pháp, thuộc pháp lý', 'You should seek legal advice.', 'Bạn nên tìm tư vấn pháp lý.'],
        ['illegal', 'bất hợp pháp', 'It is illegal to park here.', 'Đỗ xe ở đây là bất hợp pháp.'],
        ['lawful', 'hợp pháp', 'The arrest was lawful.', 'Vụ bắt giữ là hợp pháp.'],
        ['legislation', 'pháp luật, luật định', 'New legislation was passed last year.', 'Luật mới được thông qua năm ngoái.'],
        ['constitution', 'hiến pháp', 'The constitution protects basic rights.', 'Hiến pháp bảo vệ các quyền cơ bản.'],
        ['regulation', 'quy định', 'Companies must follow safety regulations.', 'Các công ty phải tuân thủ quy định an toàn.'],
        ['comply', 'tuân thủ', 'All firms must comply with the law.', 'Mọi công ty phải tuân thủ luật.'],
        ['violate', 'vi phạm', 'The company violated environmental law.', 'Công ty vi phạm luật môi trường.'],
        ['breach', 'sự vi phạm', 'This is a breach of contract.', 'Đây là vi phạm hợp đồng.'],
        ['offence', 'hành vi phạm tội', 'Speeding is a minor offence.', 'Chạy quá tốc độ là lỗi nhẹ.'],
        ['crime', 'tội phạm', 'Crime rates have fallen.', 'Tỷ lệ tội phạm đã giảm.'],
        ['criminal', 'tội phạm; thuộc hình sự', 'He has a criminal record.', 'Anh ta có tiền án.'],
        ['civil', 'thuộc dân sự', 'It is a civil case, not a criminal one.', 'Đây là vụ án dân sự chứ không phải hình sự.'],
        ['court', 'tòa án', 'The case will be heard in court next month.', 'Vụ án sẽ được xét xử tại tòa vào tháng sau.'],
        ['judge', 'thẩm phán', 'The judge announced the verdict.', 'Thẩm phán tuyên bố phán quyết.'],
        ['jury', 'bồi thẩm đoàn', 'The jury found him not guilty.', 'Bồi thẩm đoàn thấy anh ta vô tội.'],
        ['lawyer', 'luật sư', 'She hired a lawyer to represent her.', 'Cô ấy thuê luật sư đại diện.'],
        ['solicitor', 'luật sư tư vấn', 'A solicitor prepared the documents.', 'Một luật sư tư vấn đã chuẩn bị tài liệu.'],
        ['prosecutor', 'công tố viên', 'The prosecutor presented the evidence.', 'Công tố viên trình bày chứng cứ.'],
        ['defendant', 'bị cáo', 'The defendant pleaded not guilty.', 'Bị cáo không nhận tội.'],
        ['witness', 'nhân chứng', 'A witness saw the accident.', 'Một nhân chứng đã thấy vụ tai nạn.'],
        ['evidence', 'bằng chứng', 'There was not enough evidence to convict him.', 'Không đủ bằng chứng để kết tội anh ta.'],
        ['testimony', 'lời khai', 'Her testimony was crucial.', 'Lời khai của cô ấy rất quan trọng.'],
        ['trial', 'phiên tòa', 'The trial lasted three weeks.', 'Phiên tòa kéo dài ba tuần.'],
        ['verdict', 'phán quyết', 'The jury reached a unanimous verdict.', 'Bồi thẩm đoàn đạt được phán quyết nhất trí.'],
        ['guilty', 'có tội', 'He was found guilty of fraud.', 'Anh ta bị kết tội gian lận.'],
        ['innocent', 'vô tội', 'Everyone is innocent until proven guilty.', 'Mọi người đều vô tội cho đến khi bị chứng minh có tội.'],
        ['convict', 'kết tội', 'He was convicted of theft.', 'Anh ta bị kết án vì trộm cắp.'],
        ['acquit', 'tuyên trắng án', 'The court acquitted her of all charges.', 'Tòa tuyên trắng án cho cô ấy mọi cáo buộc.'],
        ['sentence', 'bản án; tuyên án', 'He received a two-year sentence.', 'Anh ta nhận án hai năm.'],
        ['fine', 'tiền phạt', 'The company was given a heavy fine.', 'Công ty bị phạt nặng.'],
        ['imprisonment', 'sự cầm tù', 'The punishment is life imprisonment.', 'Hình phạt là tù chung thân.'],
        ['appeal', 'kháng cáo', 'They decided to appeal the decision.', 'Họ quyết định kháng cáo quyết định này.'],
        ['lawsuit', 'vụ kiện', 'He filed a lawsuit against the company.', 'Anh ấy khởi kiện công ty.'],
        ['sue', 'kiện', 'She threatened to sue the hospital.', 'Cô ấy dọa kiện bệnh viện.'],
        ['claim', 'yêu cầu bồi thường', 'He made a claim for compensation.', 'Anh ấy yêu cầu bồi thường.'],
        ['damages', 'tiền bồi thường thiệt hại', 'The court awarded her damages.', 'Tòa án buộc bồi thường thiệt hại cho cô ấy.'],
        ['liable', 'phải chịu trách nhiệm pháp lý', 'The company is liable for the damage.', 'Công ty phải chịu trách nhiệm về thiệt hại.'],
        ['liability', 'trách nhiệm pháp lý', 'We accept no liability for loss.', 'Chúng tôi không chịu trách nhiệm về mất mát.'],
        ['contract', 'hợp đồng', 'A verbal contract can be difficult to prove.', 'Hợp đồng miệng có thể khó chứng minh.'],
        ['clause', 'điều khoản', 'There is a clause about early termination.', 'Có một điều khoản về chấm dứt sớm.'],
        ['terms and conditions', 'điều khoản và điều kiện', 'Read the terms and conditions before you sign.', 'Hãy đọc điều khoản và điều kiện trước khi ký.'],
        ['binding', 'có tính ràng buộc', 'The agreement is legally binding.', 'Thỏa thuận có tính ràng buộc pháp lý.'],
        ['void', 'vô hiệu', 'The contract was declared void.', 'Hợp đồng bị tuyên vô hiệu.'],
        ['copyright', 'bản quyền', 'Copying this book violates copyright.', 'Sao chép cuốn sách này vi phạm bản quyền.'],
        ['intellectual property', 'sở hữu trí tuệ', 'Intellectual property must be protected.', 'Sở hữu trí tuệ phải được bảo vệ.'],
        ['trademark', 'nhãn hiệu đã đăng ký', 'The logo is a registered trademark.', 'Logo là một nhãn hiệu đã đăng ký.'],
        ['human rights', 'nhân quyền', 'The constitution guarantees human rights.', 'Hiến pháp bảo đảm nhân quyền.'],
        ['civil liberties', 'quyền tự do công dân', 'Civil liberties must be defended.', 'Quyền tự do công dân phải được bảo vệ.'],
        ['discrimination', 'sự phân biệt đối xử', 'Discrimination at work is illegal.', 'Phân biệt đối xử ở nơi làm việc là bất hợp pháp.'],
        ['due process', 'thủ tục tố tụng hợp pháp', 'Everyone is entitled to due process.', 'Mọi người đều có quyền được xét xử theo đúng thủ tục.'],
        ['jurisdiction', 'thẩm quyền', 'The case falls under federal jurisdiction.', 'Vụ án thuộc thẩm quyền liên bang.'],
        ['precedent', 'tiền lệ', 'The ruling sets an important precedent.', 'Phán quyết tạo ra một tiền lệ quan trọng.'],
        ['amend', 'sửa đổi', 'Parliament voted to amend the law.', 'Quốc hội bỏ phiếu sửa đổi luật.'],
        ['repeal', 'bãi bỏ', 'The government plans to repeal the old law.', 'Chính phủ dự định bãi bỏ luật cũ.'],
      ],
      patterns: [
        ['The defendant pleaded not guilty to all charges.', 'Bị cáo không nhận tội với mọi cáo buộc.'],
        ['Under the terms of the contract, either party may terminate the agreement with thirty days\' notice.', 'Theo các điều khoản của hợp đồng, mỗi bên có thể chấm dứt thỏa thuận với thông báo trước ba mươi ngày.'],
        ['The company is legally responsible for any damage caused by its products.', 'Công ty chịu trách nhiệm pháp lý đối với mọi thiệt hại do sản phẩm của mình gây ra.'],
        ['Everyone is presumed innocent until proven guilty.', 'Mọi người được coi là vô tội cho đến khi bị chứng minh có tội.'],
        ['The court ruled that the dismissal was unlawful and awarded compensation.', 'Tòa phán rằng việc sa thải là trái luật và buộc bồi thường.'],
      ],
      dialogue: [
        ['A', 'I received a letter saying my landlord wants to evict me.', 'Tôi nhận được thư nói chủ nhà muốn đuổi tôi.'],
        ['B', 'Did he give you proper notice, as the lease requires?', 'Ông ấy có báo trước đúng thủ tục như hợp đồng thuê yêu cầu không?'],
        ['A', 'No. He only gave me a week.', 'Không. Ông ấy chỉ báo trước một tuần.'],
        ['B', 'That may be a breach of contract. You should talk to a solicitor.', 'Đó có thể là vi phạm hợp đồng. Bạn nên nói chuyện với một luật sư.'],
        ['A', 'Could I take the case to court?', 'Tôi có thể đưa vụ này ra tòa không?'],
        ['B', 'Possibly, but a solicitor will explain your rights and options first.', 'Có thể, nhưng luật sư sẽ giải thích quyền và các lựa chọn của bạn trước.'],
      ],
    },
    {
      id: 'kinh-te-toan-cau', title: 'Kinh tế toàn cầu & thương mại', icon: '🌐', level: 'C2',
      desc: 'Toàn cầu hóa, thương mại quốc tế, tài chính, bất bình đẳng và phát triển bền vững.',
      words: [
        ['globalization', 'toàn cầu hóa', 'Globalization has connected economies worldwide.', 'Toàn cầu hóa đã kết nối các nền kinh tế trên thế giới.'],
        ['global economy', 'nền kinh tế toàn cầu', 'The global economy is slowing down.', 'Nền kinh tế toàn cầu đang chậm lại.'],
        ['international trade', 'thương mại quốc tế', 'International trade benefits many countries.', 'Thương mại quốc tế mang lại lợi ích cho nhiều quốc gia.'],
        ['export', 'xuất khẩu', 'Vietnam exports rice and coffee.', 'Việt Nam xuất khẩu gạo và cà phê.'],
        ['import', 'nhập khẩu', 'The country imports most of its oil.', 'Nước này nhập khẩu phần lớn dầu mỏ.'],
        ['trade deficit', 'thâm hụt thương mại', 'The trade deficit widened last year.', 'Thâm hụt thương mại mở rộng năm ngoái.'],
        ['trade surplus', 'thặng dư thương mại', 'China has a large trade surplus.', 'Trung Quốc có thặng dư thương mại lớn.'],
        ['tariff', 'thuế quan', 'The government raised tariffs on steel.', 'Chính phủ tăng thuế quan với thép.'],
        ['quota', 'hạn ngạch', 'There is a quota on imported sugar.', 'Có hạn ngạch đối với đường nhập khẩu.'],
        ['free trade', 'thương mại tự do', 'Free trade agreements reduce barriers.', 'Các hiệp định thương mại tự do giảm rào cản.'],
        ['protectionism', 'chủ nghĩa bảo hộ', 'Protectionism can harm consumers.', 'Chủ nghĩa bảo hộ có thể gây hại cho người tiêu dùng.'],
        ['sanction', 'lệnh trừng phạt', 'Economic sanctions were imposed.', 'Các lệnh trừng phạt kinh tế đã được áp đặt.'],
        ['supply chain', 'chuỗi cung ứng', 'The pandemic disrupted global supply chains.', 'Đại dịch làm gián đoạn chuỗi cung ứng toàn cầu.'],
        ['multinational', 'công ty đa quốc gia', 'Multinational companies operate in many countries.', 'Các công ty đa quốc gia hoạt động ở nhiều nước.'],
        ['outsourcing', 'thuê ngoài', 'Outsourcing reduces labor costs.', 'Thuê ngoài giảm chi phí lao động.'],
        ['foreign investment', 'đầu tư nước ngoài', 'Foreign investment created many jobs.', 'Đầu tư nước ngoài tạo nhiều việc làm.'],
        ['economic growth', 'tăng trưởng kinh tế', 'Economic growth slowed to two percent.', 'Tăng trưởng kinh tế chậm lại còn hai phần trăm.'],
        ['gross domestic product', 'tổng sản phẩm quốc nội', 'Gross domestic product measures a country\'s output.', 'Tổng sản phẩm quốc nội đo sản lượng của một quốc gia.'],
        ['recession', 'suy thoái', 'The country entered a recession.', 'Quốc gia này rơi vào suy thoái.'],
        ['recovery', 'sự phục hồi', 'The economic recovery has been slow.', 'Sự phục hồi kinh tế diễn ra chậm.'],
        ['inflation', 'lạm phát', 'High inflation reduces purchasing power.', 'Lạm phát cao làm giảm sức mua.'],
        ['deflation', 'giảm phát', 'Deflation can discourage spending.', 'Giảm phát có thể làm giảm chi tiêu.'],
        ['interest rate', 'lãi suất', 'The central bank raised the interest rate.', 'Ngân hàng trung ương tăng lãi suất.'],
        ['central bank', 'ngân hàng trung ương', 'The central bank controls the money supply.', 'Ngân hàng trung ương kiểm soát cung tiền.'],
        ['exchange rate', 'tỷ giá hối đoái', 'The exchange rate affects exporters.', 'Tỷ giá hối đoái ảnh hưởng đến nhà xuất khẩu.'],
        ['currency', 'tiền tệ', 'The national currency lost value.', 'Đồng tiền quốc gia mất giá.'],
        ['devaluation', 'sự phá giá tiền tệ', 'The devaluation made imports more expensive.', 'Việc phá giá khiến hàng nhập khẩu đắt hơn.'],
        ['stock market', 'thị trường chứng khoán', 'The stock market fell sharply.', 'Thị trường chứng khoán giảm mạnh.'],
        ['shareholder', 'cổ đông', 'Shareholders demanded higher dividends.', 'Cổ đông đòi cổ tức cao hơn.'],
        ['dividend', 'cổ tức', 'The company paid a generous dividend.', 'Công ty trả cổ tức hậu hĩnh.'],
        ['bond', 'trái phiếu', 'Government bonds are considered safe.', 'Trái phiếu chính phủ được coi là an toàn.'],
        ['debt', 'nợ', 'National debt has reached record levels.', 'Nợ quốc gia đạt mức kỷ lục.'],
        ['default', 'vỡ nợ', 'The country is at risk of default.', 'Quốc gia này có nguy cơ vỡ nợ.'],
        ['austerity', 'chính sách thắt lưng buộc bụng', 'Austerity measures cut public spending.', 'Các biện pháp thắt lưng buộc bụng cắt giảm chi tiêu công.'],
        ['stimulus', 'gói kích thích', 'The government announced a stimulus package.', 'Chính phủ công bố gói kích thích kinh tế.'],
        ['subsidy', 'trợ cấp', 'Farmers receive subsidies.', 'Nông dân nhận trợ cấp.'],
        ['taxation', 'việc đánh thuế', 'Taxation is a tool for redistributing wealth.', 'Đánh thuế là công cụ tái phân phối của cải.'],
        ['tax haven', 'thiên đường thuế', 'Many firms use tax havens.', 'Nhiều công ty dùng thiên đường thuế.'],
        ['inequality', 'sự bất bình đẳng', 'Income inequality is widening.', 'Bất bình đẳng thu nhập đang gia tăng.'],
        ['poverty', 'nghèo đói', 'Globalization has lifted millions out of poverty.', 'Toàn cầu hóa đã giúp hàng triệu người thoát nghèo.'],
        ['developing country', 'nước đang phát triển', 'Developing countries need investment.', 'Các nước đang phát triển cần đầu tư.'],
        ['developed country', 'nước phát triển', 'Developed countries have aging populations.', 'Các nước phát triển có dân số già hóa.'],
        ['emerging market', 'thị trường mới nổi', 'Investors are looking at emerging markets.', 'Các nhà đầu tư đang hướng tới thị trường mới nổi.'],
        ['labor market', 'thị trường lao động', 'The labor market is very competitive.', 'Thị trường lao động rất cạnh tranh.'],
        ['unemployment', 'thất nghiệp', 'Unemployment among young people is high.', 'Tỷ lệ thất nghiệp ở người trẻ cao.'],
        ['wage', 'tiền công', 'Wages have not kept pace with prices.', 'Tiền công không theo kịp giá cả.'],
        ['productivity', 'năng suất', 'Productivity growth drives living standards.', 'Tăng năng suất thúc đẩy mức sống.'],
        ['sustainable development', 'phát triển bền vững', 'Sustainable development balances growth and the environment.', 'Phát triển bền vững cân bằng tăng trưởng và môi trường.'],
        ['carbon tax', 'thuế carbon', 'A carbon tax encourages cleaner energy.', 'Thuế carbon khuyến khích năng lượng sạch hơn.'],
        ['volatility', 'sự biến động', 'Market volatility worries investors.', 'Sự biến động của thị trường làm nhà đầu tư lo lắng.'],
        ['speculation', 'sự đầu cơ', 'Speculation pushed prices up.', 'Sự đầu cơ đã đẩy giá lên.'],
      ],
      patterns: [
        ['Globalization has brought prosperity to many countries, but it has also widened inequality.', 'Toàn cầu hóa đã mang lại thịnh vượng cho nhiều nước, nhưng cũng làm bất bình đẳng gia tăng.'],
        ['A rise in interest rates tends to slow down economic growth.', 'Việc tăng lãi suất thường làm tăng trưởng kinh tế chậm lại.'],
        ['The country relies heavily on exports, which makes it vulnerable to global demand.', 'Quốc gia này phụ thuộc nhiều vào xuất khẩu, khiến nó dễ bị tổn thương trước nhu cầu toàn cầu.'],
        ['Disruptions to supply chains have driven up prices around the world.', 'Sự gián đoạn chuỗi cung ứng đã đẩy giá cả lên khắp thế giới.'],
        ['Economists disagree about whether protectionism is ever justified.', 'Các nhà kinh tế bất đồng về việc liệu chủ nghĩa bảo hộ có bao giờ chính đáng không.'],
      ],
      dialogue: [
        ['A', 'Why are prices rising so quickly this year?', 'Sao năm nay giá cả tăng nhanh thế?'],
        ['B', 'Mainly because of inflation. Supply chains are still disrupted, and energy costs are high.', 'Chủ yếu do lạm phát. Chuỗi cung ứng vẫn bị gián đoạn và chi phí năng lượng cao.'],
        ['A', 'What can the central bank do about it?', 'Ngân hàng trung ương có thể làm gì?'],
        ['B', 'It can raise interest rates, which reduces spending but may slow growth.', 'Nó có thể tăng lãi suất, làm giảm chi tiêu nhưng có thể làm chậm tăng trưởng.'],
        ['A', 'So there is always a trade-off.', 'Vậy lúc nào cũng có sự đánh đổi.'],
        ['B', 'Precisely. That is the dilemma facing policymakers.', 'Chính xác. Đó là thế tiến thoái lưỡng nan của các nhà hoạch định chính sách.'],
      ],
    },
    {
      id: 'van-viet-trang-trong', title: 'Văn viết trang trọng & thư tín', icon: '✉️', level: 'C2',
      desc: 'Email và thư trang trọng, báo cáo, cách diễn đạt lịch sự, cụm từ nối và văn phong học thuật.',
      words: [
        ['formal', 'trang trọng', 'Use a formal style in your cover letter.', 'Hãy dùng văn phong trang trọng trong thư xin việc.'],
        ['register', 'văn phong, mức độ trang trọng', 'Choose the right register for your audience.', 'Hãy chọn văn phong phù hợp với người đọc.'],
        ['tone', 'giọng điệu', 'The tone of your email should be polite.', 'Giọng điệu của email nên lịch sự.'],
        ['courteous', 'nhã nhặn', 'Her reply was courteous and brief.', 'Thư trả lời của cô ấy nhã nhặn và ngắn gọn.'],
        ['concise', 'súc tích', 'Keep your report concise.', 'Hãy giữ báo cáo súc tích.'],
        ['salutation', 'lời chào đầu thư', 'A formal salutation is "Dear Sir or Madam".', 'Lời chào trang trọng là "Kính gửi Quý ông/bà".'],
        ['sincerely', 'trân trọng', 'End the letter with "Yours sincerely".', 'Kết thúc thư bằng "Trân trọng".'],
        ['faithfully', 'trân trọng (khi không biết tên)', '"Yours faithfully" follows "Dear Sir or Madam".', '"Yours faithfully" đi sau "Dear Sir or Madam".'],
        ['regards', 'lời chúc, chào', 'Kind regards, Anna.', 'Thân ái, Anna.'],
        ['enclosed', 'đính kèm', 'Please find my CV enclosed.', 'Xin xem CV của tôi đính kèm.'],
        ['attached', 'đính kèm (email)', 'I have attached the report.', 'Tôi đã đính kèm báo cáo.'],
        ['refer to', 'đề cập đến', 'I am writing with reference to your advertisement.', 'Tôi viết thư này liên quan đến quảng cáo của quý vị.'],
        ['regarding', 'liên quan đến', 'I am writing regarding my order.', 'Tôi viết thư liên quan đến đơn hàng của mình.'],
        ['I am writing to', 'tôi viết thư này để', 'I am writing to apply for the position.', 'Tôi viết thư này để ứng tuyển vị trí đó.'],
        ['inquire', 'hỏi, tìm hiểu', 'I am writing to inquire about your courses.', 'Tôi viết thư để hỏi về các khóa học của quý vị.'],
        ['request', 'yêu cầu', 'I would like to request a refund.', 'Tôi muốn yêu cầu hoàn tiền.'],
        ['apologize', 'xin lỗi', 'We apologize for any inconvenience caused.', 'Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào.'],
        ['appreciate', 'trân trọng', 'I would appreciate a prompt reply.', 'Tôi sẽ rất cảm kích nếu được phản hồi sớm.'],
        ['grateful', 'biết ơn', 'I would be grateful if you could help me.', 'Tôi sẽ rất biết ơn nếu bạn giúp tôi.'],
        ['kindly', 'vui lòng', 'Kindly confirm receipt of this email.', 'Vui lòng xác nhận đã nhận được email này.'],
        ['at your earliest convenience', 'vào lúc sớm nhất thuận tiện cho quý vị', 'Please reply at your earliest convenience.', 'Xin phản hồi vào lúc sớm nhất thuận tiện cho quý vị.'],
        ['look forward to', 'mong đợi', 'I look forward to hearing from you.', 'Tôi mong sớm nhận được phản hồi của quý vị.'],
        ['please do not hesitate', 'xin đừng ngần ngại', 'Please do not hesitate to contact me.', 'Xin đừng ngần ngại liên hệ với tôi.'],
        ['further information', 'thông tin thêm', 'For further information, visit our website.', 'Để biết thêm thông tin, hãy truy cập trang web của chúng tôi.'],
        ['in accordance with', 'phù hợp với', 'The work was done in accordance with the contract.', 'Công việc được thực hiện phù hợp với hợp đồng.'],
        ['pursuant to', 'theo (quy định)', 'Pursuant to our agreement, payment is due in thirty days.', 'Theo thỏa thuận của chúng ta, thanh toán đến hạn trong ba mươi ngày.'],
        ['hereby', 'bằng văn bản này', 'I hereby resign from my position.', 'Bằng văn bản này tôi xin thôi giữ chức vụ.'],
        ['furthermore', 'hơn nữa', 'Furthermore, the costs are too high.', 'Hơn nữa, chi phí quá cao.'],
        ['moreover', 'ngoài ra', 'Moreover, the project is behind schedule.', 'Ngoài ra, dự án đang chậm tiến độ.'],
        ['nevertheless', 'tuy nhiên', 'The results were poor; nevertheless, we will continue.', 'Kết quả kém; tuy vậy chúng tôi vẫn tiếp tục.'],
        ['consequently', 'do đó', 'Sales fell; consequently, we cut costs.', 'Doanh số giảm; do đó chúng tôi cắt giảm chi phí.'],
        ['therefore', 'vì vậy', 'The device is faulty; therefore, I request a refund.', 'Thiết bị bị lỗi; vì vậy tôi yêu cầu hoàn tiền.'],
        ['whereas', 'trong khi', 'Whereas A is cheap, B is more durable.', 'Trong khi A rẻ thì B bền hơn.'],
        ['in view of', 'xét đến', 'In view of the delay, we offer a discount.', 'Xét đến sự chậm trễ, chúng tôi giảm giá.'],
        ['on behalf of', 'thay mặt', 'I am writing on behalf of the committee.', 'Tôi viết thư thay mặt ủy ban.'],
        ['with regard to', 'về vấn đề', 'With regard to your request, we need more time.', 'Về yêu cầu của quý vị, chúng tôi cần thêm thời gian.'],
        ['to whom it may concern', 'kính gửi người có liên quan', 'To whom it may concern, I would like to recommend Ms. Lan.', 'Kính gửi người có liên quan, tôi muốn giới thiệu cô Lan.'],
        ['reference letter', 'thư giới thiệu', 'She wrote a reference letter for him.', 'Cô ấy viết thư giới thiệu cho anh ấy.'],
        ['resignation letter', 'đơn xin nghỉ việc', 'He handed in his resignation letter.', 'Anh ấy nộp đơn xin nghỉ việc.'],
        ['complaint letter', 'thư khiếu nại', 'I wrote a complaint letter to the manager.', 'Tôi viết thư khiếu nại gửi quản lý.'],
        ['executive summary', 'tóm tắt điều hành', 'The report begins with an executive summary.', 'Báo cáo bắt đầu bằng phần tóm tắt điều hành.'],
        ['recommendation', 'kiến nghị', 'The report ends with three recommendations.', 'Báo cáo kết thúc bằng ba kiến nghị.'],
        ['proposal', 'đề xuất', 'The board approved the proposal.', 'Hội đồng đã thông qua đề xuất.'],
        ['minutes', 'biên bản họp', 'The minutes were sent to all members.', 'Biên bản họp đã được gửi tới mọi thành viên.'],
        ['draft', 'bản nháp', 'Please read my first draft.', 'Vui lòng đọc bản nháp đầu tiên của tôi.'],
        ['proofread', 'soát lỗi', 'Proofread your email before sending it.', 'Hãy soát lỗi email trước khi gửi.'],
        ['revise', 'chỉnh sửa', 'I revised the paragraph twice.', 'Tôi đã chỉnh sửa đoạn văn hai lần.'],
        ['paragraph', 'đoạn văn', 'Each paragraph should have one main idea.', 'Mỗi đoạn văn nên có một ý chính.'],
        ['coherent', 'mạch lạc', 'The essay is clear and coherent.', 'Bài luận rõ ràng và mạch lạc.'],
        ['cohesion', 'sự liên kết', 'Linking words improve cohesion.', 'Từ nối cải thiện sự liên kết.'],
        ['jargon', 'biệt ngữ', 'Avoid jargon in a letter to customers.', 'Tránh biệt ngữ trong thư gửi khách hàng.'],
        ['ambiguity', 'sự mơ hồ', 'Avoid ambiguity in legal documents.', 'Tránh sự mơ hồ trong văn bản pháp lý.'],
      ],
      patterns: [
        ['I am writing to enquire about the possibility of arranging a meeting next week.', 'Tôi viết thư này để hỏi về khả năng sắp xếp một cuộc gặp vào tuần sau.'],
        ['I would be grateful if you could send me further details at your earliest convenience.', 'Tôi sẽ rất biết ơn nếu quý vị gửi cho tôi thêm chi tiết vào lúc sớm nhất thuận tiện.'],
        ['Please do not hesitate to contact me should you require any further information.', 'Xin đừng ngần ngại liên hệ với tôi nếu quý vị cần thêm thông tin.'],
        ['We regret to inform you that your application has not been successful.', 'Chúng tôi rất tiếc phải thông báo rằng hồ sơ của quý vị chưa được chấp nhận.'],
        ['I look forward to hearing from you and remain at your disposal for any questions.', 'Tôi mong sớm nhận được phản hồi của quý vị và sẵn sàng giải đáp mọi thắc mắc.'],
      ],
      dialogue: [
        ['A', 'Could you look at my email before I send it to the director?', 'Bạn xem giúp email của tôi trước khi gửi cho giám đốc được không?'],
        ['B', 'Of course. The tone is a bit informal. Perhaps change "Hi" to "Dear Mr. Nguyen".', 'Tất nhiên. Giọng văn hơi thân mật. Có lẽ nên đổi "Hi" thành "Kính gửi ông Nguyễn".'],
        ['A', 'And what about the ending?', 'Còn phần kết thì sao?'],
        ['B', 'Use "Yours sincerely" and add "I look forward to your reply".', 'Hãy dùng "Trân trọng" và thêm "Tôi mong nhận được phản hồi của ông".'],
        ['A', 'I wrote "Could you send me the report ASAP?"', 'Tôi viết "Gửi báo cáo cho tôi càng sớm càng tốt nhé?"'],
        ['B', 'Better: "I would be grateful if you could send me the report at your earliest convenience."', 'Tốt hơn: "Tôi sẽ rất biết ơn nếu ông gửi báo cáo cho tôi vào lúc sớm nhất thuận tiện."'],
      ],
    },
  ],
  reads: {
    'khoa-hoc-cong-nghe-moi': {
      title: 'A Double-Edged Sword',
      text: 'Few people doubt that artificial intelligence will reshape our societies, yet opinions differ sharply on whether the change will be beneficial. Optimists point to its potential to accelerate medical research, personalize education and relieve humans of dull, repetitive work. Skeptics, however, warn that automation could make millions of jobs obsolete, concentrating wealth in the hands of a few technology giants. Moreover, algorithms trained on biased data may reproduce discrimination, while the vast collection of personal data threatens individual privacy. The central challenge, therefore, is not technological but political: how can we regulate innovation without stifling it? Many experts advocate transparency, accountability and public debate. Ultimately, whether AI proves a blessing or a curse will depend less on the machines themselves than on the choices societies make about how to govern them.',
      vi: 'AI vừa hứa hẹn thúc đẩy y học, giáo dục, vừa đe dọa việc làm, riêng tư và công bằng; thách thức là điều chỉnh đổi mới một cách minh bạch, có trách nhiệm.',
      qs: [
        ['What do optimists believe AI can do?', ['Accelerate medical research and relieve dull work', 'Stop all innovation', 'Replace governments', 'End education'], 0],
        ['What risk do algorithms trained on biased data pose?', ['They may reproduce discrimination.', 'They become faster.', 'They remove privacy laws.', 'They end unemployment.'], 0],
        ['According to the text, the main challenge is', ['technological', 'political', 'geographical', 'linguistic'], 1],
      ],
    },
    'phap-luat': {
      title: 'The Presumption of Innocence',
      text: 'One of the cornerstones of modern legal systems is the presumption of innocence: anyone accused of a crime is considered innocent until the prosecution proves otherwise. This principle places the burden of proof on the state, not on the defendant. In a criminal trial, the prosecutor must present sufficient evidence to convince the jury beyond reasonable doubt. The defendant, who has the right to legal representation and to remain silent, may challenge the testimony of witnesses. If the evidence is insufficient, the court must acquit. Although the system is not perfect, and wrongful convictions do occur, the principle protects individuals from arbitrary punishment. In civil cases, by contrast, the standard of proof is lower: the claimant need only show that their version of events is more probable than not. Understanding this distinction is essential for anyone who may become involved in legal proceedings.',
      vi: 'Nguyên tắc suy đoán vô tội đặt gánh nặng chứng minh lên nhà nước; vụ án dân sự có chuẩn chứng minh thấp hơn hình sự.',
      qs: [
        ['Who carries the burden of proof in a criminal trial?', ['The defendant', 'The state', 'The witness', 'The jury'], 1],
        ['What must the court do if the evidence is insufficient?', ['Acquit', 'Convict', 'Fine the witness', 'Close the court'], 0],
        ['What is the standard of proof in civil cases?', ['Beyond reasonable doubt', 'More probable than not', 'Absolutely certain', 'There is none'], 1],
      ],
    },
    'kinh-te-toan-cau': {
      title: 'The Promise and Perils of Globalization',
      text: 'Over the past half-century, globalization has transformed the world economy. Falling trade barriers, cheaper transport and digital communication have allowed companies to build supply chains that span continents. Consequently, hundreds of millions of people in developing countries have escaped extreme poverty, and consumers in wealthier nations enjoy a wider choice of goods at lower prices. Nevertheless, the benefits have been unevenly distributed. Factories in some industrial regions have closed as production moved abroad, leaving workers unemployed and fueling resentment. Financial crises, too, now spread rapidly across borders, as the 2008 collapse demonstrated. These tensions have encouraged a renewed interest in protectionism and in shorter, more resilient supply chains. Economists broadly agree that trade creates overall gains; the debate concerns how to share them fairly and how to protect those who lose.',
      vi: 'Toàn cầu hóa giúp nhiều người thoát nghèo và hạ giá hàng hóa, nhưng phân phối lợi ích không đều, lan truyền khủng hoảng và thúc đẩy bảo hộ; vấn đề là chia sẻ lợi ích công bằng.',
      qs: [
        ['What has globalization helped hundreds of millions of people do?', ['Escape extreme poverty', 'Move to space', 'Stop trading', 'Avoid taxes'], 0],
        ['Why have factories in some regions closed?', ['Production moved abroad.', 'There was too much demand.', 'Taxes were removed.', 'Workers wanted holidays.'], 0],
        ['What do economists broadly agree on?', ['Trade creates overall gains.', 'Trade should stop.', 'Tariffs are always good.', 'Supply chains are useless.'], 0],
      ],
    },
    'van-viet-trang-trong': {
      title: 'Writing a Formal Email',
      text: 'A formal email requires more care than a message to a friend. Begin with an appropriate salutation: "Dear Dr. Brown" if you know the name, or "Dear Sir or Madam" if you do not. In the opening sentence, state your purpose clearly, for example, "I am writing to enquire about..." or "I am writing with reference to your advertisement." Keep paragraphs short and use a courteous tone. Avoid contractions, slang and abbreviations; write "I would be grateful if you could" rather than "Can you". Use linking words such as furthermore and consequently to make your argument coherent. Finish with a polite closing, such as "I look forward to hearing from you", and sign off with "Yours sincerely" or "Yours faithfully". Finally, proofread the message carefully, because spelling mistakes can damage your credibility.',
      vi: 'Email trang trọng cần lời chào phù hợp, nêu rõ mục đích, giọng lịch sự, tránh viết tắt và tiếng lóng, dùng từ nối, kết thư lịch sự và soát lỗi.',
      qs: [
        ['What should you do in the opening sentence?', ['State your purpose clearly', 'Tell a joke', 'Ask for money', 'Use slang'], 0],
        ['Which is more formal?', ['Can you send it?', 'I would be grateful if you could send it.', 'Send it now!', 'Gimme the file.'], 1],
        ['Why should you proofread?', ['Spelling mistakes can damage your credibility.', 'It is a legal rule.', 'It makes the email longer.', 'It removes the greeting.'], 0],
      ],
    },
  },
  defs: `
artificial intelligence = computer systems able to perform tasks that normally need human thinking
machine learning = a way for computers to learn from data without being told exactly what to do
algorithm = a set of rules a computer follows
automation = the use of machines to do work automatically
robotics = the study and use of robots
breakthrough = an important discovery or achievement
innovation = a new idea or method
cutting-edge = using the newest ideas and methods
disruptive = causing a major change in the way an industry works
revolutionize = to change something completely
prototype = the first model of something
patent = an official right to be the only one to make an invention
research and development = work done to discover and create new products
quantum computing = computing based on the behavior of very small particles
blockchain = a digital record of transactions shared across many computers
cryptocurrency = digital money that uses codes for security
cloud computing = using internet servers to store and process data
big data = very large sets of data analyzed by computers
data analysis = examining data to find useful information
cybersecurity = protection of computer systems from attack
encryption = turning information into a secret code
data breach = an incident where private data is exposed
privacy = the freedom to keep your personal information secret
surveillance = close observation of people
facial recognition = technology that identifies people by their faces
consent = permission to do something
transparency = openness about how something works
bias = an unfair preference or distortion
ethical = relating to moral principles
accountability = being responsible for your actions
regulate = to control by rules or laws
misinformation = false or inaccurate information
deepfake = a fake video created using artificial intelligence
digital divide = the gap between people who have access to technology and those who do not
addiction = being unable to stop doing something
virtual reality = a computer-created environment you can explore
augmented reality = technology that adds digital images to the real world
wearable = a device that you wear on your body
smart home = a home with devices controlled electronically
self-driving = able to drive without a human driver
renewable energy = energy from sources that do not run out
gene editing = changing the DNA of a living thing
biotechnology = using living things to make products
nanotechnology = technology working at the scale of atoms and molecules
space exploration = the investigation of space
obsolete = no longer used because something better exists
adapt = to change to suit new conditions
reskill = to learn new skills for a changed job
pros and cons = the advantages and disadvantages
double-edged sword = something with both good and bad effects
law = a rule made by a government
legal = allowed by law
illegal = not allowed by law
lawful = allowed by law
legislation = laws made by a government
constitution = the basic laws of a country
regulation = an official rule
comply = to obey a rule
violate = to break a law or rule
breach = a failure to keep to an agreement or law
offence = an illegal act
crime = an act that breaks the law
criminal = a person who commits crimes
civil = relating to private disputes between people
court = a place where legal cases are heard
judge = a person who decides cases in court
jury = a group of citizens who decide a verdict
lawyer = a person trained to give legal advice
solicitor = a lawyer who prepares legal documents
prosecutor = a lawyer who presents the case against an accused person
defendant = a person accused in a court
witness = a person who saw an event
evidence = facts that show something is true
testimony = a statement made in court
trial = a legal process to decide whether someone is guilty
verdict = the decision of a jury or judge
guilty = having committed a crime
innocent = not having committed a crime
convict = to decide in court that someone is guilty
acquit = to decide in court that someone is not guilty
sentence = the punishment given by a judge
imprisonment = the state of being kept in prison
appeal = to ask a higher court to change a decision
lawsuit = a case brought to a court
sue = to take legal action against someone
claim = a demand for something as a right
damages = money paid to someone for harm done
liable = legally responsible
liability = legal responsibility
clause = a section of a legal document
terms and conditions = the rules of an agreement
binding = legally forcing someone to do something
void = having no legal force
copyright = the legal right to control copying of creative work
intellectual property = ideas and creations protected by law
trademark = a registered symbol or name of a product
human rights = basic freedoms that belong to every person
civil liberties = personal freedoms protected by law
discrimination = unfair treatment of people
due process = fair treatment by the legal system
jurisdiction = the official power to make legal decisions
precedent = an earlier decision used as a guide
amend = to change a law or document
repeal = to officially end a law
globalization = the way the world's economies and cultures become connected
global economy = the economic system of the whole world
international trade = buying and selling between countries
export = to sell goods to another country
import = to bring in goods from another country
trade deficit = when a country imports more than it exports
trade surplus = when a country exports more than it imports
tariff = a tax on imported goods
quota = an official limit on an amount
free trade = trade without government limits
protectionism = protecting local industry from foreign competition
sanction = a punishment for breaking international rules
supply chain = the system of producing and delivering a product
multinational = a company operating in many countries
outsourcing = paying another company to do work
foreign investment = money put into a business in another country
economic growth = an increase in a country's output
gross domestic product = the total value of goods and services produced in a country
recession = a period of economic decline
recovery = a return to a better condition
inflation = a general rise in prices
deflation = a general fall in prices
interest rate = the cost of borrowing money
central bank = the main bank that manages a country's money
exchange rate = the value of one currency in terms of another
currency = the money used in a country
devaluation = a fall in the value of a currency
stock market = a place where shares are bought and sold
shareholder = a person who owns shares in a company
dividend = a share of profits paid to shareholders
bond = a loan to a government or company
debt = money that is owed
default = failure to pay a debt
austerity = government policy of reducing spending
stimulus = something that encourages economic activity
subsidy = money given by a government to support an industry
taxation = the system of collecting taxes
tax haven = a country with very low taxes
inequality = an unfair difference between groups
poverty = the state of being very poor
developing country = a country with a lower standard of living
developed country = a country with an advanced economy
emerging market = a country whose economy is growing fast
labor market = the supply of workers and the demand for jobs
unemployment = the state of having no job
wage = money paid for work
productivity = how much work is done in a time
sustainable development = growth that does not harm the future
carbon tax = a tax on the carbon dioxide produced
volatility = a tendency to change quickly
speculation = buying in the hope of making a quick profit
formal = following accepted rules of polite writing
register = the style of language suited to a situation
tone = the attitude shown in writing
courteous = polite and respectful
concise = clear and short
salutation = a greeting at the start of a letter
sincerely = a polite way to end a letter
faithfully = a formal way to end a letter
regards = good wishes at the end of a message
enclosed = put in the same envelope
attached = sent together with an email
refer to = to mention
regarding = about
I am writing to = a formal phrase to state your purpose
inquire = to ask for information
request = to ask for something politely
apologize = to say sorry
appreciate = to be grateful for
grateful = thankful
kindly = used to make a request polite
at your earliest convenience = as soon as you can
look forward to = to wait with pleasure for something
please do not hesitate = a polite way to invite someone to contact you
further information = more details
in accordance with = following a rule or agreement
pursuant to = according to a rule or agreement
hereby = by this document
furthermore = in addition
moreover = besides
nevertheless = in spite of that
consequently = as a result
therefore = for that reason
whereas = while, in contrast
in view of = considering
on behalf of = representing someone
with regard to = concerning
to whom it may concern = a greeting when you do not know the reader
resignation letter = a letter saying you are leaving your job
complaint letter = a letter saying you are not satisfied
executive summary = a short summary at the start of a report
recommendation = a suggestion about what should be done
proposal = a formal plan or suggestion
draft = an early version of a piece of writing
proofread = to read a text to find errors
revise = to change something to improve it
paragraph = a section of a text starting on a new line
coherent = clear and logical
cohesion = the way parts of a text are linked
jargon = special words used by a particular profession
ambiguity = the quality of having more than one meaning

## ghi đè theo chủ đề
khoa-hoc-cong-nghe-moi|prototype = an early model of a new machine
khoa-hoc-cong-nghe-moi|addiction = being unable to stop using something harmful
khoa-hoc-cong-nghe-moi|bias = an unfair preference built into a system
khoa-hoc-cong-nghe-moi|surveillance = close watching of people, often by technology
phap-luat|fine = money paid as a punishment
phap-luat|contract = a legal agreement
phap-luat|clause = a section of a contract
phap-luat|claim = a demand for money for harm or loss
phap-luat|appeal = to ask a higher court to change a decision
phap-luat|discrimination = unfair treatment because of who someone is
kinh-te-toan-cau|recovery = a return of the economy to a stronger condition
kinh-te-toan-cau|bond = a loan to a government or company
kinh-te-toan-cau|productivity = how much is produced for each hour of work
van-viet-trang-trong|request = to ask for something politely and formally
van-viet-trang-trong|minutes = a written record of what was said at a meeting
van-viet-trang-trong|revise = to change a text to improve it
van-viet-trang-trong|recommendation = a suggestion about what should be done
`,
};
