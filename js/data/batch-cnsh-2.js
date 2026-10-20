// Đợt 2 chủ đề chuyên ngành CNSH: miễn dịch học, virus học, nuôi cấy tế bào, an toàn phòng thí nghiệm.
export const batch = {
  track: 'chuyen-nganh',
  topics: [
    {
      id: 'mien-dich-hoc', title: 'Miễn dịch học', icon: '🛡️', level: 'Trung cấp',
      desc: 'Hệ miễn dịch, kháng thể, vắc-xin và các phản ứng miễn dịch.',
      words: [
        ['immunology', 'miễn dịch học', 'Immunology studies how the body defends itself.', 'Miễn dịch học nghiên cứu cách cơ thể tự bảo vệ.'],
        ['immune system', 'hệ miễn dịch', 'The immune system fights infection.', 'Hệ miễn dịch chống lại nhiễm trùng.'],
        ['innate immunity', 'miễn dịch bẩm sinh', 'Innate immunity responds within hours.', 'Miễn dịch bẩm sinh phản ứng trong vài giờ.'],
        ['adaptive immunity', 'miễn dịch thích ứng', 'Adaptive immunity remembers past infections.', 'Miễn dịch thích ứng ghi nhớ các lần nhiễm trước.'],
        ['pathogen', 'mầm bệnh', 'A pathogen can enter through the skin.', 'Mầm bệnh có thể xâm nhập qua da.'],
        ['infection', 'sự nhiễm trùng', 'The infection spread to the lungs.', 'Nhiễm trùng lan đến phổi.'],
        ['inflammation', 'viêm', 'Inflammation causes redness and swelling.', 'Viêm gây đỏ và sưng.'],
        ['white blood cell', 'bạch cầu', 'White blood cells attack germs.', 'Bạch cầu tấn công vi trùng.'],
        ['lymphocyte', 'tế bào lympho', 'A lymphocyte recognizes a specific antigen.', 'Tế bào lympho nhận ra một kháng nguyên đặc hiệu.'],
        ['B cell', 'tế bào B', 'A B cell produces antibodies.', 'Tế bào B tạo ra kháng thể.'],
        ['T cell', 'tế bào T', 'A T cell can kill infected cells.', 'Tế bào T có thể tiêu diệt tế bào bị nhiễm.'],
        ['macrophage', 'đại thực bào', 'A macrophage engulfs bacteria.', 'Đại thực bào nuốt vi khuẩn.'],
        ['neutrophil', 'bạch cầu trung tính', 'Neutrophils arrive first at the wound.', 'Bạch cầu trung tính đến vết thương đầu tiên.'],
        ['antigen', 'kháng nguyên', 'An antigen triggers an immune response.', 'Kháng nguyên kích hoạt đáp ứng miễn dịch.'],
        ['antibody', 'kháng thể', 'An antibody binds to a specific antigen.', 'Kháng thể gắn vào một kháng nguyên đặc hiệu.'],
        ['immunoglobulin', 'immunoglobulin', 'IgG is the most common immunoglobulin.', 'IgG là immunoglobulin phổ biến nhất.'],
        ['epitope', 'quyết định kháng nguyên', 'The antibody recognizes one epitope.', 'Kháng thể nhận ra một quyết định kháng nguyên.'],
        ['monoclonal antibody', 'kháng thể đơn dòng', 'Monoclonal antibodies are used to treat cancer.', 'Kháng thể đơn dòng được dùng để điều trị ung thư.'],
        ['polyclonal', 'đa dòng', 'A polyclonal serum contains many antibodies.', 'Huyết thanh đa dòng chứa nhiều kháng thể.'],
        ['hybridoma', 'tế bào lai (hybridoma)', 'A hybridoma produces one type of antibody.', 'Tế bào lai tạo ra một loại kháng thể.'],
        ['serum', 'huyết thanh', 'Serum was collected from the blood.', 'Huyết thanh được lấy từ máu.'],
        ['vaccine', 'vắc-xin', 'The vaccine prepares the body for infection.', 'Vắc-xin chuẩn bị cơ thể cho nhiễm trùng.'],
        ['vaccination', 'sự tiêm chủng', 'Vaccination protects the whole community.', 'Tiêm chủng bảo vệ cả cộng đồng.'],
        ['booster', 'liều nhắc lại', 'A booster dose is given after six months.', 'Liều nhắc lại được tiêm sau sáu tháng.'],
        ['immunity', 'miễn dịch', 'Natural immunity develops after infection.', 'Miễn dịch tự nhiên hình thành sau khi nhiễm bệnh.'],
        ['herd immunity', 'miễn dịch cộng đồng', 'Herd immunity protects people who cannot be vaccinated.', 'Miễn dịch cộng đồng bảo vệ những người không thể tiêm.'],
        ['allergy', 'dị ứng', 'An allergy is an overreaction of the immune system.', 'Dị ứng là phản ứng quá mức của hệ miễn dịch.'],
        ['allergen', 'chất gây dị ứng', 'Pollen is a common allergen.', 'Phấn hoa là chất gây dị ứng phổ biến.'],
        ['histamine', 'histamin', 'Histamine causes itching and swelling.', 'Histamin gây ngứa và sưng.'],
        ['autoimmune disease', 'bệnh tự miễn', 'Lupus is an autoimmune disease.', 'Lupus là một bệnh tự miễn.'],
        ['immunodeficiency', 'suy giảm miễn dịch', 'HIV causes immunodeficiency.', 'HIV gây suy giảm miễn dịch.'],
        ['transplant', 'ghép tạng', 'The patient needs a kidney transplant.', 'Bệnh nhân cần ghép thận.'],
        ['rejection', 'sự đào thải', 'Drugs prevent the rejection of the organ.', 'Thuốc ngăn chặn sự đào thải nội tạng.'],
        ['cytokine', 'cytokine', 'Cytokines coordinate the immune response.', 'Cytokine điều phối đáp ứng miễn dịch.'],
        ['interferon', 'interferon', 'Interferon slows the spread of viruses.', 'Interferon làm chậm sự lan của virus.'],
        ['complement', 'bổ thể', 'The complement system destroys bacteria.', 'Hệ bổ thể phá hủy vi khuẩn.'],
        ['phagocytosis', 'thực bào', 'Phagocytosis removes dead cells.', 'Thực bào loại bỏ tế bào chết.'],
        ['lymph node', 'hạch bạch huyết', 'Lymph nodes swell during infection.', 'Hạch bạch huyết sưng lên khi nhiễm trùng.'],
        ['spleen', 'lá lách', 'The spleen filters the blood.', 'Lá lách lọc máu.'],
        ['bone marrow', 'tủy xương', 'Blood cells are made in the bone marrow.', 'Tế bào máu được tạo ra trong tủy xương.'],
        ['thymus', 'tuyến ức', 'T cells mature in the thymus.', 'Tế bào T trưởng thành trong tuyến ức.'],
        ['ELISA', 'xét nghiệm ELISA', 'ELISA detects antibodies in the serum.', 'ELISA phát hiện kháng thể trong huyết thanh.'],
        ['flow cytometry', 'đếm tế bào dòng chảy', 'Flow cytometry counts different cell types.', 'Đếm tế bào dòng chảy đếm các loại tế bào khác nhau.'],
        ['titer', 'hiệu giá kháng thể', 'The antibody titer was 1:640.', 'Hiệu giá kháng thể là 1:640.'],
        ['adjuvant', 'chất bổ trợ', 'An adjuvant boosts the immune response.', 'Chất bổ trợ tăng cường đáp ứng miễn dịch.'],
        ['attenuated', 'giảm độc lực', 'An attenuated virus is used in the vaccine.', 'Virus giảm độc lực được dùng trong vắc-xin.'],
        ['inactivated', 'bất hoạt', 'The inactivated vaccine cannot cause disease.', 'Vắc-xin bất hoạt không thể gây bệnh.'],
        ['mRNA vaccine', 'vắc-xin mRNA', 'An mRNA vaccine teaches cells to make a viral protein.', 'Vắc-xin mRNA dạy tế bào tạo ra protein của virus.'],
        ['immunotherapy', 'liệu pháp miễn dịch', 'Immunotherapy helps the body fight cancer.', 'Liệu pháp miễn dịch giúp cơ thể chống ung thư.'],
        ['immune response', 'đáp ứng miễn dịch', 'The immune response was measured after two weeks.', 'Đáp ứng miễn dịch được đo sau hai tuần.'],
      ],
      patterns: [
        ['B cells produce antibodies that bind to a specific antigen.', 'Tế bào B tạo ra kháng thể gắn vào một kháng nguyên đặc hiệu.'],
        ['The vaccine stimulates the immune system without causing the disease.', 'Vắc-xin kích thích hệ miễn dịch mà không gây bệnh.'],
        ['Serum samples were collected before and after vaccination.', 'Các mẫu huyết thanh được thu thập trước và sau khi tiêm.'],
        ['Antibody levels were measured by ELISA.', 'Nồng độ kháng thể được đo bằng ELISA.'],
        ['In autoimmune diseases, the immune system attacks the body\'s own cells.', 'Trong bệnh tự miễn, hệ miễn dịch tấn công chính tế bào của cơ thể.'],
      ],
      dialogue: [
        ['A', 'How long does it take to see an antibody response?', 'Mất bao lâu để thấy đáp ứng kháng thể?'],
        ['B', 'Usually about two weeks after the first dose.', 'Thường khoảng hai tuần sau liều đầu tiên.'],
        ['A', 'Do we need a booster?', 'Chúng ta có cần liều nhắc lại không?'],
        ['B', 'Yes, it raises the antibody titer and extends protection.', 'Có, nó làm tăng hiệu giá kháng thể và kéo dài thời gian bảo vệ.'],
        ['A', 'Which method will you use to measure it?', 'Bạn sẽ dùng phương pháp nào để đo?'],
        ['B', 'ELISA on serum samples from each volunteer.', 'ELISA trên mẫu huyết thanh của từng tình nguyện viên.'],
      ],
    },
    {
      id: 'virus-hoc', title: 'Virus học', icon: '🧫', level: 'Trung cấp',
      desc: 'Cấu trúc virus, nhân lên, lây nhiễm, chẩn đoán và thuốc kháng virus.',
      words: [
        ['virology', 'virus học', 'Virology is the study of viruses.', 'Virus học là ngành nghiên cứu về virus.'],
        ['virus', 'virus', 'A virus can only multiply inside a host cell.', 'Virus chỉ nhân lên bên trong tế bào chủ.'],
        ['virion', 'hạt virus', 'A single virion is extremely small.', 'Một hạt virus đơn lẻ vô cùng nhỏ.'],
        ['capsid', 'vỏ capsid', 'The capsid protects the viral genome.', 'Vỏ capsid bảo vệ bộ gen của virus.'],
        ['envelope', 'vỏ bọc lipid', 'The influenza virus has an envelope.', 'Virus cúm có vỏ bọc lipid.'],
        ['spike protein', 'protein gai', 'The spike protein binds to the host receptor.', 'Protein gai gắn vào thụ thể của tế bào chủ.'],
        ['viral genome', 'bộ gen virus', 'The viral genome is made of RNA.', 'Bộ gen virus được cấu tạo từ RNA.'],
        ['bacteriophage', 'thể thực khuẩn', 'A bacteriophage infects bacteria.', 'Thể thực khuẩn lây nhiễm cho vi khuẩn.'],
        ['host', 'vật chủ', 'The virus needs a living host.', 'Virus cần một vật chủ sống.'],
        ['host cell', 'tế bào chủ', 'The virus enters the host cell.', 'Virus xâm nhập tế bào chủ.'],
        ['receptor', 'thụ thể', 'The virus attaches to a cell receptor.', 'Virus bám vào thụ thể của tế bào.'],
        ['attachment', 'sự bám dính', 'Attachment is the first step of infection.', 'Bám dính là bước đầu của quá trình lây nhiễm.'],
        ['entry', 'sự xâm nhập', 'Viral entry occurs by membrane fusion.', 'Virus xâm nhập bằng cách hợp nhất màng.'],
        ['replication', 'sự nhân lên', 'Viral replication takes place in the cytoplasm.', 'Virus nhân lên trong tế bào chất.'],
        ['assembly', 'sự lắp ráp', 'New virions form during assembly.', 'Các hạt virus mới hình thành khi lắp ráp.'],
        ['release', 'sự giải phóng', 'The virions are released by budding.', 'Các hạt virus được giải phóng bằng cách nảy chồi.'],
        ['lytic cycle', 'chu trình tan', 'The lytic cycle destroys the host cell.', 'Chu trình tan phá hủy tế bào chủ.'],
        ['lysogenic cycle', 'chu trình tiềm tan', 'In the lysogenic cycle, the phage DNA joins the bacterial genome.', 'Trong chu trình tiềm tan, DNA phage gắn vào bộ gen vi khuẩn.'],
        ['reverse transcriptase', 'enzyme phiên mã ngược', 'HIV uses reverse transcriptase.', 'HIV dùng enzyme phiên mã ngược.'],
        ['retrovirus', 'retrovirus', 'HIV is a retrovirus.', 'HIV là một retrovirus.'],
        ['DNA virus', 'virus DNA', 'A DNA virus copies its genome in the nucleus.', 'Virus DNA sao chép bộ gen trong nhân.'],
        ['RNA virus', 'virus RNA', 'An RNA virus mutates quickly.', 'Virus RNA đột biến nhanh.'],
        ['mutation rate', 'tốc độ đột biến', 'The mutation rate of influenza is high.', 'Tốc độ đột biến của virus cúm cao.'],
        ['strain', 'chủng', 'A new strain appeared last winter.', 'Một chủng mới xuất hiện vào mùa đông năm ngoái.'],
        ['variant', 'biến thể', 'This variant spreads faster.', 'Biến thể này lây lan nhanh hơn.'],
        ['transmission', 'sự lây truyền', 'Transmission occurs through droplets.', 'Sự lây truyền xảy ra qua giọt bắn.'],
        ['airborne', 'lây qua không khí', 'Measles is an airborne disease.', 'Sởi là bệnh lây qua không khí.'],
        ['droplet', 'giọt bắn', 'Droplets spread when we cough.', 'Giọt bắn phát tán khi chúng ta ho.'],
        ['vector', 'vật trung gian truyền bệnh', 'A mosquito is the vector of dengue.', 'Muỗi là vật trung gian truyền bệnh sốt xuất huyết.'],
        ['zoonosis', 'bệnh lây từ động vật sang người', 'Rabies is a zoonosis.', 'Bệnh dại là bệnh lây từ động vật sang người.'],
        ['outbreak', 'đợt bùng phát', 'The outbreak started in a small village.', 'Đợt bùng phát bắt đầu từ một ngôi làng nhỏ.'],
        ['epidemic', 'dịch bệnh', 'The epidemic lasted three months.', 'Dịch bệnh kéo dài ba tháng.'],
        ['pandemic', 'đại dịch', 'A pandemic affects many countries.', 'Đại dịch ảnh hưởng nhiều quốc gia.'],
        ['incubation period', 'thời gian ủ bệnh', 'The incubation period is five days.', 'Thời gian ủ bệnh là năm ngày.'],
        ['symptom', 'triệu chứng', 'Fever is a common symptom.', 'Sốt là triệu chứng phổ biến.'],
        ['asymptomatic', 'không triệu chứng', 'Many carriers are asymptomatic.', 'Nhiều người mang virus không có triệu chứng.'],
        ['carrier', 'người mang mầm bệnh', 'A carrier can spread the virus.', 'Người mang mầm bệnh có thể lây virus.'],
        ['quarantine', 'cách ly', 'Contacts must stay in quarantine.', 'Người tiếp xúc phải cách ly.'],
        ['viral load', 'tải lượng virus', 'The viral load decreased after treatment.', 'Tải lượng virus giảm sau điều trị.'],
        ['diagnosis', 'chẩn đoán', 'Early diagnosis improves recovery.', 'Chẩn đoán sớm cải thiện khả năng hồi phục.'],
        ['RT-PCR', 'RT-PCR', 'RT-PCR detects viral RNA.', 'RT-PCR phát hiện RNA của virus.'],
        ['rapid test', 'xét nghiệm nhanh', 'A rapid test gives results in 15 minutes.', 'Xét nghiệm nhanh cho kết quả trong 15 phút.'],
        ['swab', 'que lấy mẫu (dịch ngoáy)', 'A nasal swab was taken.', 'Một mẫu ngoáy mũi đã được lấy.'],
        ['cell culture', 'nuôi cấy tế bào', 'Viruses are grown in cell culture.', 'Virus được nuôi trong tế bào nuôi cấy.'],
        ['plaque', 'vết tan (plaque)', 'Each plaque comes from one virion.', 'Mỗi vết tan đến từ một hạt virus.'],
        ['cytopathic effect', 'hiệu ứng bệnh lý tế bào', 'The cytopathic effect appeared after two days.', 'Hiệu ứng bệnh lý tế bào xuất hiện sau hai ngày.'],
        ['antiviral', 'thuốc kháng virus', 'The antiviral blocks replication.', 'Thuốc kháng virus chặn sự nhân lên.'],
        ['drug resistance', 'kháng thuốc', 'Drug resistance can develop quickly.', 'Tình trạng kháng thuốc có thể phát triển nhanh.'],
        ['neutralization', 'sự trung hòa', 'Neutralization prevents the virus from entering cells.', 'Sự trung hòa ngăn virus xâm nhập tế bào.'],
        ['surveillance', 'giám sát', 'Disease surveillance tracks new cases.', 'Giám sát dịch bệnh theo dõi các ca mới.'],
        ['sequencing', 'giải trình tự', 'Sequencing revealed a new variant.', 'Giải trình tự phát hiện một biến thể mới.'],
        ['containment', 'sự khống chế', 'Early containment stopped the spread.', 'Khống chế sớm đã ngăn sự lây lan.'],
      ],
      patterns: [
        ['A virus cannot reproduce on its own; it needs a host cell.', 'Virus không thể tự sinh sản; nó cần một tế bào chủ.'],
        ['The spike protein attaches to a receptor on the surface of the host cell.', 'Protein gai bám vào thụ thể trên bề mặt tế bào chủ.'],
        ['RNA viruses tend to mutate faster than DNA viruses.', 'Virus RNA có xu hướng đột biến nhanh hơn virus DNA.'],
        ['The diagnosis was confirmed by RT-PCR from a nasal swab.', 'Chẩn đoán được xác nhận bằng RT-PCR từ mẫu ngoáy mũi.'],
        ['The outbreak was contained through early quarantine and contact tracing.', 'Đợt bùng phát được khống chế nhờ cách ly sớm và truy vết người tiếp xúc.'],
      ],
      dialogue: [
        ['A', 'Which method did you use to detect the virus?', 'Bạn dùng phương pháp nào để phát hiện virus?'],
        ['B', 'RT-PCR on nasal swabs, because it detects viral RNA.', 'RT-PCR trên mẫu ngoáy mũi, vì nó phát hiện RNA của virus.'],
        ['A', 'What was the viral load in the first sample?', 'Tải lượng virus trong mẫu đầu tiên là bao nhiêu?'],
        ['B', 'It was very high, and it dropped after three days of treatment.', 'Rất cao, và giảm sau ba ngày điều trị.'],
        ['A', 'Should we sequence the genome?', 'Chúng ta có nên giải trình tự bộ gen không?'],
        ['B', 'Yes, to check whether it is a new variant.', 'Có, để kiểm tra xem đó có phải biến thể mới không.'],
      ],
    },
    {
      id: 'nuoi-cay-te-bao', title: 'Nuôi cấy tế bào động vật', icon: '🧪', level: 'Trung cấp',
      desc: 'Môi trường, tế bào gốc, kỹ thuật nuôi cấy, đông lạnh và kiểm soát nhiễm.',
      words: [
        ['cell line', 'dòng tế bào', 'HeLa is a well-known cell line.', 'HeLa là một dòng tế bào nổi tiếng.'],
        ['primary cell', 'tế bào sơ cấp', 'Primary cells are taken directly from tissue.', 'Tế bào sơ cấp được lấy trực tiếp từ mô.'],
        ['immortalized', 'bất tử hóa', 'Immortalized cells can divide forever.', 'Tế bào bất tử hóa có thể phân chia vô hạn.'],
        ['adherent', 'bám dính', 'Adherent cells attach to the flask surface.', 'Tế bào bám dính gắn vào bề mặt bình.'],
        ['suspension', 'dạng huyền phù', 'Suspension cells float in the medium.', 'Tế bào huyền phù nổi trong môi trường.'],
        ['monolayer', 'lớp đơn', 'The cells formed a monolayer.', 'Các tế bào tạo thành một lớp đơn.'],
        ['confluence', 'độ phủ kín (mật độ)', 'The cells reached 80% confluence.', 'Tế bào đạt độ phủ kín 80%.'],
        ['passage', 'lần cấy chuyển', 'This is passage number 12.', 'Đây là lần cấy chuyển thứ 12.'],
        ['subculture', 'cấy chuyển', 'Subculture the cells every three days.', 'Cấy chuyển tế bào ba ngày một lần.'],
        ['trypsin', 'trypsin', 'Trypsin detaches the cells from the flask.', 'Trypsin làm tế bào tách khỏi bình.'],
        ['detach', 'làm bong ra', 'Detach the cells with trypsin for five minutes.', 'Làm bong tế bào bằng trypsin trong năm phút.'],
        ['seeding', 'gieo tế bào', 'Seeding density was 10,000 cells per well.', 'Mật độ gieo là 10.000 tế bào mỗi giếng.'],
        ['cell count', 'đếm tế bào', 'A cell count was done with a hemocytometer.', 'Việc đếm tế bào được thực hiện bằng buồng đếm.'],
        ['hemocytometer', 'buồng đếm tế bào', 'Load the sample into the hemocytometer.', 'Nạp mẫu vào buồng đếm tế bào.'],
        ['viability', 'khả năng sống', 'Cell viability was above 95%.', 'Khả năng sống của tế bào trên 95%.'],
        ['trypan blue', 'xanh trypan', 'Trypan blue stains dead cells.', 'Xanh trypan nhuộm tế bào chết.'],
        ['culture medium', 'môi trường nuôi cấy', 'Change the culture medium every two days.', 'Thay môi trường nuôi cấy hai ngày một lần.'],
        ['serum', 'huyết thanh', 'The medium contains ten percent serum.', 'Môi trường chứa mười phần trăm huyết thanh.'],
        ['fetal bovine serum', 'huyết thanh bào thai bò', 'Fetal bovine serum supports cell growth.', 'Huyết thanh bào thai bò hỗ trợ sinh trưởng của tế bào.'],
        ['growth factor', 'yếu tố tăng trưởng', 'Growth factors stimulate cell division.', 'Yếu tố tăng trưởng kích thích phân chia tế bào.'],
        ['supplement', 'chất bổ sung', 'Add the supplement to the medium.', 'Thêm chất bổ sung vào môi trường.'],
        ['antibiotic', 'kháng sinh', 'Penicillin is a common antibiotic in culture.', 'Penicillin là kháng sinh phổ biến trong nuôi cấy.'],
        ['phenol red', 'chỉ thị phenol đỏ', 'Phenol red shows the pH of the medium.', 'Phenol đỏ cho biết pH của môi trường.'],
        ['CO2 incubator', 'tủ ấm CO2', 'Cells grow in a CO2 incubator at 37 degrees.', 'Tế bào phát triển trong tủ ấm CO2 ở 37 độ.'],
        ['humidity', 'độ ẩm', 'The incubator keeps high humidity.', 'Tủ ấm duy trì độ ẩm cao.'],
        ['sterile technique', 'kỹ thuật vô trùng', 'Always use sterile technique.', 'Luôn dùng kỹ thuật vô trùng.'],
        ['biosafety cabinet', 'tủ an toàn sinh học', 'Open the flask inside the biosafety cabinet.', 'Mở bình trong tủ an toàn sinh học.'],
        ['contamination', 'sự nhiễm', 'Contamination ruined the whole plate.', 'Sự nhiễm đã làm hỏng cả đĩa.'],
        ['mycoplasma', 'mycoplasma', 'Mycoplasma is hard to see under a microscope.', 'Mycoplasma khó thấy dưới kính hiển vi.'],
        ['fungal', 'thuộc nấm', 'A fungal contamination appeared as white threads.', 'Sự nhiễm nấm xuất hiện dưới dạng sợi trắng.'],
        ['bacterial', 'thuộc vi khuẩn', 'The bacterial contamination made the medium cloudy.', 'Nhiễm vi khuẩn làm môi trường bị đục.'],
        ['discard', 'loại bỏ', 'Discard contaminated cultures immediately.', 'Loại bỏ ngay các mẫu nuôi cấy bị nhiễm.'],
        ['aspirate', 'hút bỏ', 'Aspirate the old medium carefully.', 'Hút bỏ môi trường cũ cẩn thận.'],
        ['pipetting', 'thao tác pipet', 'Pipetting should be gentle.', 'Thao tác pipet cần nhẹ nhàng.'],
        ['flask', 'bình nuôi cấy', 'The cells grow in a T75 flask.', 'Tế bào phát triển trong bình T75.'],
        ['multiwell plate', 'đĩa nhiều giếng', 'Use a 96-well multiwell plate.', 'Dùng đĩa 96 giếng.'],
        ['cryopreservation', 'bảo quản lạnh sâu', 'Cryopreservation keeps cells for years.', 'Bảo quản lạnh sâu giữ tế bào trong nhiều năm.'],
        ['liquid nitrogen', 'nitơ lỏng', 'The vials are stored in liquid nitrogen.', 'Các ống được bảo quản trong nitơ lỏng.'],
        ['DMSO', 'DMSO', 'DMSO protects cells during freezing.', 'DMSO bảo vệ tế bào khi đông lạnh.'],
        ['thaw', 'rã đông', 'Thaw the vial quickly at 37 degrees.', 'Rã đông ống nhanh ở 37 độ.'],
        ['stem cell', 'tế bào gốc', 'Stem cells can become many cell types.', 'Tế bào gốc có thể trở thành nhiều loại tế bào.'],
        ['differentiation', 'sự biệt hóa', 'Differentiation was induced with a growth factor.', 'Sự biệt hóa được cảm ứng bằng một yếu tố tăng trưởng.'],
        ['organoid', 'organoid', 'An organoid is a miniature organ grown in vitro.', 'Organoid là một cơ quan thu nhỏ nuôi trong ống nghiệm.'],
        ['tissue engineering', 'kỹ thuật mô', 'Tissue engineering aims to grow replacement skin.', 'Kỹ thuật mô nhằm tạo ra da thay thế.'],
        ['scaffold', 'giá đỡ', 'The cells grew on a collagen scaffold.', 'Tế bào phát triển trên giá đỡ collagen.'],
        ['transfection', 'chuyển nạp', 'Transfection introduces DNA into the cells.', 'Chuyển nạp đưa DNA vào tế bào.'],
        ['cytotoxicity', 'độc tính tế bào', 'We tested the cytotoxicity of the new compound.', 'Chúng tôi thử độc tính tế bào của hợp chất mới.'],
        ['proliferation', 'sự tăng sinh', 'Cell proliferation was measured daily.', 'Sự tăng sinh tế bào được đo hằng ngày.'],
        ['apoptosis', 'chết theo chương trình', 'The drug induced apoptosis in cancer cells.', 'Thuốc gây chết theo chương trình ở tế bào ung thư.'],
        ['in vitro', 'trong ống nghiệm', 'The experiment was done in vitro.', 'Thí nghiệm được thực hiện trong ống nghiệm.'],
        ['in vivo', 'trên cơ thể sống', 'The result was confirmed in vivo.', 'Kết quả được xác nhận trên cơ thể sống.'],
      ],
      patterns: [
        ['The cells were maintained in DMEM supplemented with ten percent fetal bovine serum.', 'Tế bào được duy trì trong DMEM bổ sung mười phần trăm huyết thanh bào thai bò.'],
        ['Cells were incubated at 37 degrees Celsius in a humidified atmosphere of 5 percent CO2.', 'Tế bào được ủ ở 37 độ C trong môi trường ẩm có 5 phần trăm CO2.'],
        ['At 80 percent confluence, the cells were detached with trypsin and subcultured.', 'Khi đạt độ phủ kín 80 phần trăm, tế bào được tách bằng trypsin và cấy chuyển.'],
        ['Cell viability was assessed using trypan blue exclusion.', 'Khả năng sống của tế bào được đánh giá bằng phương pháp loại trừ xanh trypan.'],
        ['The cultures were tested regularly for mycoplasma contamination.', 'Các mẫu nuôi cấy được kiểm tra định kỳ về nhiễm mycoplasma.'],
      ],
      dialogue: [
        ['A', 'How confluent are the cells today?', 'Hôm nay tế bào phủ kín được bao nhiêu?'],
        ['B', 'About 85 percent. We need to subculture them now.', 'Khoảng 85 phần trăm. Chúng ta cần cấy chuyển ngay.'],
        ['A', 'Did you check the medium color?', 'Bạn có kiểm tra màu môi trường không?'],
        ['B', 'It turned yellow, which means the pH dropped.', 'Nó chuyển sang màu vàng, nghĩa là pH đã giảm.'],
        ['A', 'Let us change the medium and count the cells.', 'Hãy thay môi trường và đếm tế bào.'],
        ['B', 'I will prepare the hemocytometer and trypan blue.', 'Tôi sẽ chuẩn bị buồng đếm và xanh trypan.'],
      ],
    },
    {
      id: 'an-toan-phong-lab', title: 'An toàn phòng thí nghiệm', icon: '🥽', level: 'Trung cấp',
      desc: 'Quy tắc an toàn, hóa chất, rủi ro sinh học, sự cố và sơ cứu trong phòng thí nghiệm.',
      words: [
        ['safety', 'an toàn', 'Safety comes before speed.', 'An toàn quan trọng hơn tốc độ.'],
        ['hazard', 'mối nguy', 'Every chemical has a hazard.', 'Mọi hóa chất đều có mối nguy.'],
        ['risk', 'rủi ro', 'We assess the risk before each experiment.', 'Chúng tôi đánh giá rủi ro trước mỗi thí nghiệm.'],
        ['risk assessment', 'đánh giá rủi ro', 'A risk assessment is mandatory.', 'Đánh giá rủi ro là bắt buộc.'],
        ['personal protective equipment', 'trang bị bảo hộ cá nhân', 'Wear personal protective equipment at all times.', 'Luôn mặc trang bị bảo hộ cá nhân.'],
        ['lab coat', 'áo choàng phòng thí nghiệm', 'Put on your lab coat.', 'Hãy mặc áo choàng phòng thí nghiệm.'],
        ['gloves', 'găng tay', 'Change gloves after touching samples.', 'Thay găng tay sau khi chạm vào mẫu.'],
        ['goggles', 'kính bảo hộ', 'Wear goggles when handling acids.', 'Đeo kính bảo hộ khi xử lý axit.'],
        ['face shield', 'tấm che mặt', 'Use a face shield for splashing liquids.', 'Dùng tấm che mặt khi có chất lỏng bắn tóe.'],
        ['mask', 'khẩu trang', 'Wear a mask in the cleanroom.', 'Đeo khẩu trang trong phòng sạch.'],
        ['closed-toe shoes', 'giày kín mũi', 'Closed-toe shoes are required.', 'Bắt buộc phải đi giày kín mũi.'],
        ['fume hood', 'tủ hút khí độc', 'Work with volatile solvents in the fume hood.', 'Làm việc với dung môi bay hơi trong tủ hút.'],
        ['ventilation', 'thông gió', 'Good ventilation removes harmful vapors.', 'Thông gió tốt loại bỏ hơi độc.'],
        ['chemical', 'hóa chất', 'Store each chemical in its place.', 'Cất mỗi hóa chất đúng chỗ của nó.'],
        ['toxic', 'độc', 'This solvent is toxic.', 'Dung môi này độc.'],
        ['corrosive', 'ăn mòn', 'Hydrochloric acid is corrosive.', 'Axit clohydric có tính ăn mòn.'],
        ['flammable', 'dễ cháy', 'Keep flammable liquids away from flames.', 'Giữ chất lỏng dễ cháy cách xa lửa.'],
        ['explosive', 'dễ nổ', 'Never heat an explosive substance.', 'Không bao giờ đun chất dễ nổ.'],
        ['carcinogen', 'chất gây ung thư', 'Ethidium bromide is a carcinogen.', 'Ethidium bromide là chất gây ung thư.'],
        ['label', 'nhãn', 'Every bottle must have a clear label.', 'Mọi chai đều phải có nhãn rõ ràng.'],
        ['safety data sheet', 'phiếu an toàn hóa chất', 'Read the safety data sheet before use.', 'Đọc phiếu an toàn hóa chất trước khi dùng.'],
        ['storage', 'sự bảo quản', 'Acids need separate storage from bases.', 'Axit cần được bảo quản riêng khỏi bazơ.'],
        ['spill', 'sự đổ tràn', 'Clean up a spill immediately.', 'Dọn ngay khi có chất đổ tràn.'],
        ['spill kit', 'bộ dụng cụ xử lý tràn đổ', 'The spill kit is near the door.', 'Bộ xử lý tràn đổ ở gần cửa.'],
        ['waste', 'chất thải', 'Do not mix different kinds of waste.', 'Không trộn các loại chất thải khác nhau.'],
        ['hazardous waste', 'chất thải nguy hại', 'Hazardous waste goes into a special container.', 'Chất thải nguy hại bỏ vào thùng đặc biệt.'],
        ['biohazard', 'nguy cơ sinh học', 'The biohazard symbol warns of infectious material.', 'Biểu tượng nguy cơ sinh học cảnh báo vật liệu lây nhiễm.'],
        ['biosafety level', 'cấp độ an toàn sinh học', 'This lab is biosafety level 2.', 'Phòng thí nghiệm này đạt cấp độ an toàn sinh học 2.'],
        ['infectious', 'có khả năng lây nhiễm', 'Treat every sample as infectious.', 'Coi mọi mẫu đều có khả năng lây nhiễm.'],
        ['decontaminate', 'khử nhiễm', 'Decontaminate the bench after work.', 'Khử nhiễm bàn làm việc sau khi làm xong.'],
        ['disinfect', 'khử trùng', 'Disinfect your hands before leaving.', 'Khử trùng tay trước khi rời đi.'],
        ['autoclave', 'hấp tiệt trùng', 'Autoclave all used media before disposal.', 'Hấp tiệt trùng mọi môi trường đã dùng trước khi thải.'],
        ['sharps', 'vật sắc nhọn', 'Put sharps in a puncture-proof container.', 'Bỏ vật sắc nhọn vào hộp chống đâm thủng.'],
        ['needle', 'kim tiêm', 'Never recap a used needle.', 'Không bao giờ đậy lại kim đã dùng.'],
        ['broken glass', 'thủy tinh vỡ', 'Throw broken glass into a special bin.', 'Bỏ thủy tinh vỡ vào thùng riêng.'],
        ['fire extinguisher', 'bình chữa cháy', 'Know where the fire extinguisher is.', 'Biết bình chữa cháy ở đâu.'],
        ['fire alarm', 'báo cháy', 'The fire alarm rang during the test.', 'Chuông báo cháy kêu trong lúc thử.'],
        ['emergency exit', 'lối thoát hiểm', 'Keep the emergency exit clear.', 'Giữ lối thoát hiểm thông thoáng.'],
        ['evacuation', 'sự sơ tán', 'Follow the evacuation plan.', 'Làm theo kế hoạch sơ tán.'],
        ['eyewash station', 'trạm rửa mắt', 'Rinse your eyes at the eyewash station.', 'Rửa mắt tại trạm rửa mắt.'],
        ['safety shower', 'vòi tắm khẩn cấp', 'Use the safety shower if acid spills on you.', 'Dùng vòi tắm khẩn cấp nếu axit đổ lên người.'],
        ['first aid', 'sơ cứu', 'The first aid kit is on the wall.', 'Hộp sơ cứu ở trên tường.'],
        ['burn', 'vết bỏng', 'Cool a burn under running water.', 'Làm mát vết bỏng dưới vòi nước chảy.'],
        ['injury', 'chấn thương', 'Report every injury to the supervisor.', 'Báo cáo mọi chấn thương cho người giám sát.'],
        ['incident', 'sự cố', 'An incident report must be written.', 'Phải lập báo cáo sự cố.'],
        ['supervisor', 'người giám sát', 'Ask your supervisor if you are unsure.', 'Hỏi người giám sát nếu bạn chưa chắc chắn.'],
        ['training', 'đào tạo', 'Safety training is required for newcomers.', 'Người mới bắt buộc phải được đào tạo an toàn.'],
        ['procedure', 'quy trình', 'Follow the procedure exactly.', 'Làm đúng theo quy trình.'],
        ['good laboratory practice', 'thực hành tốt phòng thí nghiệm', 'Good laboratory practice ensures reliable data.', 'Thực hành tốt phòng thí nghiệm bảo đảm dữ liệu đáng tin.'],
        ['eating and drinking', 'ăn uống', 'Eating and drinking are not allowed in the lab.', 'Không được ăn uống trong phòng thí nghiệm.'],
      ],
      patterns: [
        ['Always wear a lab coat, gloves and goggles when working in the laboratory.', 'Luôn mặc áo choàng, đeo găng tay và kính bảo hộ khi làm việc trong phòng thí nghiệm.'],
        ['Volatile and toxic chemicals must be handled in a fume hood.', 'Hóa chất bay hơi và độc phải được xử lý trong tủ hút.'],
        ['In case of a spill, notify your supervisor and use the spill kit.', 'Khi có chất đổ tràn, hãy báo người giám sát và dùng bộ xử lý tràn đổ.'],
        ['All biological waste must be autoclaved before disposal.', 'Mọi chất thải sinh học phải được hấp tiệt trùng trước khi thải bỏ.'],
        ['Any accident or injury must be reported immediately.', 'Mọi tai nạn hoặc chấn thương phải được báo cáo ngay lập tức.'],
      ],
      dialogue: [
        ['Trainer', 'Before you start, put on your lab coat and goggles.', 'Trước khi bắt đầu, hãy mặc áo choàng và đeo kính bảo hộ.'],
        ['Trainee', 'Where should I put the used pipette tips?', 'Tôi nên bỏ đầu tip đã dùng ở đâu?'],
        ['Trainer', 'In the biohazard bin. It will be autoclaved later.', 'Vào thùng chất thải sinh học. Sau đó nó sẽ được hấp tiệt trùng.'],
        ['Trainee', 'What if I spill some acid?', 'Nếu tôi làm đổ axit thì sao?'],
        ['Trainer', 'Move away, warn others and use the spill kit.', 'Hãy tránh ra, báo cho người khác và dùng bộ xử lý tràn đổ.'],
        ['Trainee', 'Understood. And the eyewash station is by the door?', 'Tôi hiểu. Trạm rửa mắt ở cạnh cửa phải không?'],
      ],
    },
  ],
  reads: {
    'mien-dich-hoc': {
      title: 'How Vaccines Train the Immune System',
      text: 'A vaccine works by showing the immune system a harmless version of a pathogen. It may contain a weakened virus, a killed virus, a single protein, or instructions for making a protein, as in an mRNA vaccine. When the vaccine is injected, immune cells recognize the antigen as foreign. B cells then produce antibodies, while T cells learn to destroy infected cells. Some of these cells become memory cells that stay in the body for years. If the real pathogen enters later, the memory cells respond much faster and stronger, often before symptoms appear. A booster dose can raise the antibody level again. When enough people are vaccinated, the disease spreads less, which protects those who cannot be vaccinated. This effect is called herd immunity.',
      vi: 'Vắc-xin cho hệ miễn dịch làm quen với kháng nguyên vô hại để tạo kháng thể và tế bào nhớ; khi nhiều người tiêm thì có miễn dịch cộng đồng.',
      qs: [
        ['What does a vaccine show the immune system?', ['A harmless version of a pathogen', 'A new antibiotic', 'A hormone', 'A damaged organ'], 0],
        ['What do memory cells do?', ['They produce toxins.', 'They respond faster if the pathogen returns.', 'They cause allergies.', 'They carry oxygen.'], 1],
        ['What is herd immunity?', ['Immunity in animals only', 'Protection of those who cannot be vaccinated when many are immune', 'A type of booster', 'A kind of antibody'], 1],
      ],
    },
    'virus-hoc': {
      title: 'The Life Cycle of a Virus',
      text: 'Viruses are not cells, and they cannot grow or reproduce on their own. To multiply, a virus must infect a host cell and use its machinery. The cycle begins with attachment: proteins on the surface of the virus bind to a specific receptor on the host cell. The virus then enters the cell, and its genome is released. Inside the cell, the viral genome is copied and viral proteins are produced. These parts are assembled into new virions, which leave the cell by budding or by breaking it open. Some viruses, such as HIV, convert RNA into DNA with reverse transcriptase. Because RNA viruses make many copying errors, they mutate quickly and may form new variants. This is why vaccines and antiviral drugs must be updated regularly.',
      vi: 'Virus nhân lên trong tế bào chủ qua các bước bám dính, xâm nhập, sao chép, lắp ráp và giải phóng; virus RNA đột biến nhanh nên tạo biến thể mới.',
      qs: [
        ['What is the first step of the virus cycle?', ['Assembly', 'Release', 'Attachment', 'Mutation'], 2],
        ['How do new virions leave the cell?', ['By budding or by breaking the cell open', 'Through the nucleus', 'By swimming', 'By photosynthesis'], 0],
        ['Why do RNA viruses mutate quickly?', ['They make many copying errors.', 'They are very large.', 'They have a nucleus.', 'They are cells.'], 0],
      ],
    },
    'nuoi-cay-te-bao': {
      title: 'Keeping Cells Alive in a Flask',
      text: 'Growing animal cells in a laboratory requires patience and strict cleanliness. Cells are kept in a CO2 incubator at 37 degrees Celsius, in a medium that provides nutrients, growth factors and serum. The phenol red in the medium acts as a pH indicator: it turns yellow when the medium becomes acidic, showing that the cells need fresh medium. When adherent cells cover about 80 percent of the flask, they must be subcultured. The old medium is removed, trypsin detaches the cells, and a small portion is placed into a new flask. All work is done in a biosafety cabinet to prevent contamination. Even so, bacteria, fungi or mycoplasma can appear, so cultures are checked regularly. Extra cells can be frozen in liquid nitrogen with DMSO and thawed later.',
      vi: 'Nuôi cấy tế bào động vật cần tủ ấm CO2, môi trường dinh dưỡng, cấy chuyển khi phủ 80%, làm việc vô trùng và có thể đông lạnh trong nitơ lỏng.',
      qs: [
        ['What does yellow medium indicate?', ['The cells are healthy.', 'The pH has dropped.', 'The medium is sterile.', 'The cells are frozen.'], 1],
        ['When are adherent cells subcultured?', ['At about 80 percent confluence', 'Only after a month', 'When they float', 'Never'], 0],
        ['What protects cells during freezing?', ['Phenol red', 'Trypsin', 'DMSO', 'Serum'], 2],
      ],
    },
    'an-toan-phong-lab': {
      title: 'Ten Minutes Before You Enter the Lab',
      text: 'New students often ask what they should do before their first experiment. The answer begins with preparation. Read the procedure and the safety data sheets for every chemical. Find out where the eyewash station, the safety shower, the fire extinguisher and the emergency exit are. Put on a lab coat, closed-toe shoes, gloves and goggles, and tie back long hair. Never eat or drink in the laboratory, and keep your bench clear. Label every tube and bottle clearly. Work with volatile or toxic substances only in the fume hood. After the experiment, sort the waste into the correct containers, put sharps into the sharps bin and decontaminate your bench. If something goes wrong, stay calm, warn others and tell your supervisor. Reporting small incidents helps prevent serious accidents.',
      vi: 'Trước khi vào phòng thí nghiệm cần đọc quy trình và phiếu an toàn, biết vị trí thiết bị khẩn cấp, mặc đồ bảo hộ, không ăn uống, phân loại chất thải và báo cáo sự cố.',
      qs: [
        ['What should students read before starting?', ['The news', 'The procedure and safety data sheets', 'Only the label', 'A novel'], 1],
        ['Where should volatile or toxic substances be used?', ['On the bench', 'In the corridor', 'In the fume hood', 'In the refrigerator'], 2],
        ['Why is it important to report small incidents?', ['It prevents serious accidents.', 'It wastes time.', 'It is optional.', 'It is only for supervisors.'], 0],
      ],
    },
  },
  defs: `
immunology = the study of the body's defence against disease
immune system = the body's system that fights infections
innate immunity = the body's general, fast defence from birth
adaptive immunity = defence that learns to recognize specific germs
infection = a disease caused by germs
inflammation = redness, heat and swelling in a part of the body
white blood cell = a blood cell that helps fight infection
lymphocyte = a white blood cell that recognizes specific germs
B cell = a lymphocyte that makes antibodies
T cell = a lymphocyte that kills infected cells or helps other immune cells
macrophage = a large cell that swallows germs and dead cells
neutrophil = a white blood cell that first attacks bacteria
immunoglobulin = another word for an antibody
epitope = the part of an antigen that an antibody binds to
monoclonal antibody = an antibody made by identical cells that targets one antigen
polyclonal = made of antibodies that target many parts of an antigen
hybridoma = a cell made by joining an antibody-producing cell with a cancer cell
serum = the clear liquid part of blood
vaccination = giving a vaccine to protect against a disease
booster = an extra dose of a vaccine to keep protection strong
immunity = the ability to resist a disease
herd immunity = protection of a community when most people are immune
allergen = a substance that causes an allergy
histamine = a chemical released in allergic reactions
autoimmune disease = a disease in which the body attacks its own cells
immunodeficiency = a weak immune system
transplant = an operation to replace an organ with another one
rejection = when the body attacks a transplanted organ
cytokine = a small protein that sends signals between immune cells
interferon = a protein that helps cells resist viruses
complement = proteins in blood that help destroy germs
phagocytosis = when a cell swallows a germ or particle
lymph node = a small organ that filters lymph and holds immune cells
spleen = an organ that filters blood and helps immunity
bone marrow = soft tissue inside bones where blood cells are made
thymus = an organ where T cells mature
ELISA = a laboratory test that detects antibodies or antigens
flow cytometry = a method that counts and sorts cells as they pass a laser
adjuvant = a substance added to a vaccine to strengthen the response
attenuated = weakened so that it cannot cause serious disease
inactivated = killed or made unable to infect
mRNA vaccine = a vaccine that uses instructions to make a protein
immunotherapy = treatment that uses the immune system to fight disease
immune response = the body's reaction to a foreign substance
virology = the scientific study of viruses
virion = a complete virus particle
capsid = the protein shell around a virus's genome
envelope = a membrane layer around some viruses
spike protein = a protein on a virus surface used to enter cells
viral genome = the genetic material of a virus
bacteriophage = a virus that infects bacteria
host = a living thing that carries another organism
attachment = the first step when a virus binds to a cell
entry = the step when a virus gets inside a cell
release = the step when new viruses leave the cell
lytic cycle = a cycle in which new viruses burst out and kill the cell
lysogenic cycle = a cycle in which viral DNA hides in the host genome
reverse transcriptase = an enzyme that makes DNA from RNA
retrovirus = an RNA virus that makes DNA in the host cell
DNA virus = a virus whose genome is DNA
RNA virus = a virus whose genome is RNA
mutation rate = how often changes happen in a genome
transmission = the passing of a disease from one person to another
airborne = carried through the air
droplet = a tiny drop of liquid sprayed when we cough or sneeze
vector = an organism that carries a disease to others
zoonosis = a disease that passes from animals to people
outbreak = a sudden rise in cases of a disease
epidemic = a disease that spreads quickly in a community
pandemic = an epidemic that spreads across many countries
incubation period = the time between infection and the first symptoms
asymptomatic = showing no symptoms of a disease
carrier = a person who has a germ and can pass it on
quarantine = keeping people apart to stop disease spreading
viral load = the amount of virus in the blood or body
diagnosis = finding out what disease a person has
RT-PCR = a test that detects RNA by copying it
rapid test = a quick test that shows a result in minutes
swab = a small piece of cotton on a stick used to take a sample
plaque = a clear spot in a cell layer where a virus has killed cells
cytopathic effect = visible damage to cells caused by a virus
antiviral = a medicine that fights viruses
drug resistance = when germs stop responding to a medicine
neutralization = blocking a virus so that it cannot infect cells
surveillance = careful watching of the spread of disease
containment = keeping something harmful within limits
cell line = cells that can be grown in a laboratory for a long time
primary cell = a cell taken directly from a living tissue
immortalized = able to divide without limit
adherent = sticking to a surface
suspension = particles floating in a liquid
monolayer = a single layer of cells
confluence = the percentage of a surface covered by cells
passage = one round of moving cells into a new flask
subculture = to move some cells into fresh medium
trypsin = an enzyme that detaches cells from a surface
detach = to separate from a surface
seeding = putting cells into a dish or flask to grow
cell count = the number of cells in a sample
hemocytometer = a slide with a grid used to count cells
trypan blue = a dye that stains dead cells
culture medium = a liquid with nutrients for growing cells
fetal bovine serum = a nutrient-rich liquid from cow blood used in cell culture
growth factor = a protein that makes cells grow and divide
supplement = something added to improve a mixture
antibiotic = a medicine that kills bacteria
phenol red = a dye that shows the acidity of a medium
CO2 incubator = a warm chamber with carbon dioxide for cells
humidity = the amount of water vapor in the air
sterile technique = working so that no unwanted germs get in
biosafety cabinet = a ventilated cabinet that protects workers and samples
mycoplasma = a tiny bacterium that often contaminates cell cultures
fungal = caused by fungi
bacterial = caused by bacteria
discard = to throw away
aspirate = to remove a liquid by suction
pipetting = moving liquid with a pipette
flask = a glass or plastic bottle used for culture
multiwell plate = a plate with many small wells
cryopreservation = freezing cells at very low temperature to store them
liquid nitrogen = a very cold liquid used to freeze samples
DMSO = a chemical that protects cells when they are frozen
thaw = to warm something frozen until it melts
organoid = a small organ-like structure grown from cells
tissue engineering = growing tissue to repair or replace parts of the body
cytotoxicity = the quality of being harmful to cells
proliferation = a rapid increase in the number of cells
in vitro = done in a laboratory dish, not in a living body
in vivo = done in a living organism
safety = the state of being protected from danger
hazard = something that can cause harm
risk = the chance that something bad will happen
risk assessment = a study of possible dangers before work starts
personal protective equipment = clothing and gear that protect you at work
lab coat = a white coat worn in a laboratory
gloves = hand coverings that protect your skin
goggles = tight glasses that protect your eyes
face shield = a clear plastic cover for the whole face
mask = a covering for the nose and mouth
closed-toe shoes = shoes that cover the whole foot
ventilation = a flow of fresh air in a room
chemical = a substance used in or made by chemistry
toxic = poisonous
corrosive = able to destroy materials by chemical action
flammable = able to catch fire easily
explosive = able to blow up
carcinogen = a substance that can cause cancer
label = a piece of paper that tells what something is
safety data sheet = a document that lists the hazards of a chemical
storage = keeping something in a particular place
spill = liquid that has accidentally fallen out of a container
spill kit = equipment used to clean up spills safely
waste = things that are thrown away
hazardous waste = dangerous waste that needs special disposal
biohazard = a biological substance that is dangerous to health
biosafety level = a rating of the safety rules needed for work with germs
infectious = able to pass disease to others
decontaminate = to make a place or thing free from harmful substances
disinfect = to clean with a substance that kills germs
sharps = needles and other objects that can cut or pierce
needle = a thin sharp metal tube used for injections
broken glass = pieces of glass from a broken container
fire extinguisher = a device that sprays foam or water to put out a fire
fire alarm = a loud signal that warns of fire
emergency exit = a door used to leave a building in danger
evacuation = leaving a dangerous place quickly
eyewash station = a place where you can rinse your eyes in an emergency
safety shower = a shower used to wash away harmful chemicals
first aid = basic medical help given before a doctor arrives
burn = an injury caused by heat or chemicals
incident = an unexpected event, often a small accident
supervisor = a person who watches and directs work
good laboratory practice = quality rules for planning and recording laboratory work
eating and drinking = taking food and drink into the body
`,
};
