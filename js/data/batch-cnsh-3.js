// Đợt 3 chủ đề chuyên ngành CNSH: y dược, nông nghiệp & thực phẩm, môi trường, thống kê & thiết kế thí nghiệm.
export const batch = {
  track: 'chuyen-nganh',
  topics: [
    {
      id: 'cnsh-y-duoc', title: 'CNSH y dược', icon: '💊', level: 'Nâng cao',
      desc: 'Phát triển thuốc sinh học, thử nghiệm lâm sàng, sản xuất và quản lý chất lượng dược phẩm.',
      words: [
        ['pharmaceutical', 'dược phẩm', 'The pharmaceutical industry invests heavily in research.', 'Ngành dược phẩm đầu tư mạnh vào nghiên cứu.'],
        ['biopharmaceutical', 'dược phẩm sinh học', 'Insulin is a biopharmaceutical.', 'Insulin là một dược phẩm sinh học.'],
        ['biologic', 'thuốc sinh học', 'A biologic is made from living cells.', 'Thuốc sinh học được làm từ tế bào sống.'],
        ['drug discovery', 'khám phá thuốc', 'Drug discovery can take many years.', 'Khám phá thuốc có thể mất nhiều năm.'],
        ['drug development', 'phát triển thuốc', 'Drug development has several phases.', 'Phát triển thuốc có nhiều giai đoạn.'],
        ['target', 'đích tác động', 'The protein is a promising drug target.', 'Protein này là đích tác động đầy hứa hẹn.'],
        ['lead compound', 'hợp chất dẫn đầu', 'The lead compound was optimized.', 'Hợp chất dẫn đầu đã được tối ưu.'],
        ['screening', 'sàng lọc', 'High-throughput screening tests thousands of compounds.', 'Sàng lọc thông lượng cao thử hàng nghìn hợp chất.'],
        ['assay', 'phép thử', 'The assay measures enzyme inhibition.', 'Phép thử đo mức ức chế enzyme.'],
        ['preclinical', 'tiền lâm sàng', 'Preclinical studies use cells and animals.', 'Nghiên cứu tiền lâm sàng dùng tế bào và động vật.'],
        ['clinical trial', 'thử nghiệm lâm sàng', 'The clinical trial involves 300 patients.', 'Thử nghiệm lâm sàng có 300 bệnh nhân.'],
        ['phase I', 'giai đoạn I', 'Phase I tests safety in a small group.', 'Giai đoạn I kiểm tra độ an toàn ở nhóm nhỏ.'],
        ['placebo', 'giả dược', 'Half of the patients received a placebo.', 'Một nửa số bệnh nhân nhận giả dược.'],
        ['randomized', 'ngẫu nhiên hóa', 'This is a randomized controlled trial.', 'Đây là thử nghiệm đối chứng ngẫu nhiên.'],
        ['double-blind', 'mù đôi', 'A double-blind study avoids bias.', 'Nghiên cứu mù đôi tránh sai lệch.'],
        ['volunteer', 'tình nguyện viên', 'Each volunteer signed an informed consent form.', 'Mỗi tình nguyện viên ký giấy đồng ý tham gia.'],
        ['informed consent', 'đồng ý có hiểu biết', 'Informed consent is required before the trial.', 'Cần có sự đồng ý có hiểu biết trước thử nghiệm.'],
        ['endpoint', 'tiêu chí đánh giá', 'The primary endpoint was survival.', 'Tiêu chí đánh giá chính là sự sống còn.'],
        ['efficacy', 'hiệu quả', 'The trial showed good efficacy.', 'Thử nghiệm cho thấy hiệu quả tốt.'],
        ['safety profile', 'hồ sơ an toàn', 'The drug has a good safety profile.', 'Thuốc có hồ sơ an toàn tốt.'],
        ['adverse event', 'biến cố bất lợi', 'Each adverse event was recorded.', 'Mỗi biến cố bất lợi đều được ghi lại.'],
        ['side effect', 'tác dụng phụ', 'Nausea is a common side effect.', 'Buồn nôn là tác dụng phụ thường gặp.'],
        ['dose', 'liều dùng', 'The dose was increased gradually.', 'Liều dùng được tăng dần.'],
        ['dosage', 'liều lượng', 'The dosage depends on body weight.', 'Liều lượng phụ thuộc cân nặng.'],
        ['pharmacokinetics', 'dược động học', 'Pharmacokinetics describes how the body handles a drug.', 'Dược động học mô tả cách cơ thể xử lý thuốc.'],
        ['pharmacodynamics', 'dược lực học', 'Pharmacodynamics studies the effect of a drug.', 'Dược lực học nghiên cứu tác dụng của thuốc.'],
        ['bioavailability', 'sinh khả dụng', 'Oral bioavailability is low.', 'Sinh khả dụng đường uống thấp.'],
        ['half-life', 'thời gian bán thải', 'The half-life of the drug is six hours.', 'Thời gian bán thải của thuốc là sáu giờ.'],
        ['formulation', 'bào chế', 'The formulation includes a stabilizer.', 'Công thức bào chế có chất ổn định.'],
        ['excipient', 'tá dược', 'An excipient is an inactive ingredient.', 'Tá dược là thành phần không có hoạt tính.'],
        ['injection', 'thuốc tiêm', 'The injection is given once a week.', 'Thuốc tiêm được dùng mỗi tuần một lần.'],
        ['tablet', 'viên nén', 'The tablet dissolves in the stomach.', 'Viên nén tan trong dạ dày.'],
        ['recombinant protein', 'protein tái tổ hợp', 'Recombinant protein is made in Chinese hamster ovary cells.', 'Protein tái tổ hợp được sản xuất trong tế bào buồng trứng chuột đồng Trung Quốc.'],
        ['expression system', 'hệ biểu hiện', 'E. coli is a simple expression system.', 'E. coli là một hệ biểu hiện đơn giản.'],
        ['upstream', 'giai đoạn thượng nguồn', 'Upstream processing includes cell culture.', 'Giai đoạn thượng nguồn gồm nuôi cấy tế bào.'],
        ['downstream', 'giai đoạn hạ nguồn', 'Downstream processing purifies the protein.', 'Giai đoạn hạ nguồn tinh sạch protein.'],
        ['purification', 'sự tinh sạch', 'Purification removes impurities.', 'Tinh sạch loại bỏ tạp chất.'],
        ['impurity', 'tạp chất', 'Impurities must be below the limit.', 'Tạp chất phải dưới giới hạn.'],
        ['sterility', 'tính vô trùng', 'Sterility testing is required for injections.', 'Phải thử tính vô trùng với thuốc tiêm.'],
        ['endotoxin', 'nội độc tố', 'The endotoxin level was within the limit.', 'Mức nội độc tố nằm trong giới hạn.'],
        ['potency', 'hiệu lực', 'The potency of each batch is tested.', 'Hiệu lực của từng lô được kiểm tra.'],
        ['biosimilar', 'thuốc sinh học tương tự', 'A biosimilar is highly similar to the original drug.', 'Thuốc sinh học tương tự rất giống thuốc gốc.'],
        ['generic', 'thuốc generic', 'A generic drug is cheaper than the brand.', 'Thuốc generic rẻ hơn thuốc biệt dược.'],
        ['patent', 'bằng sáng chế', 'The patent expires in ten years.', 'Bằng sáng chế hết hạn sau mười năm.'],
        ['regulatory approval', 'phê duyệt của cơ quan quản lý', 'Regulatory approval is needed before marketing.', 'Cần phê duyệt của cơ quan quản lý trước khi bán ra thị trường.'],
        ['marketing authorization', 'giấy phép lưu hành', 'The company applied for marketing authorization.', 'Công ty nộp đơn xin giấy phép lưu hành.'],
        ['post-marketing', 'sau khi lưu hành', 'Post-marketing surveillance monitors safety.', 'Giám sát sau lưu hành theo dõi độ an toàn.'],
        ['pharmacovigilance', 'cảnh giác dược', 'Pharmacovigilance collects reports of side effects.', 'Cảnh giác dược thu thập báo cáo về tác dụng phụ.'],
        ['personalized medicine', 'y học cá thể hóa', 'Personalized medicine uses genetic information.', 'Y học cá thể hóa dùng thông tin di truyền.'],
        ['biomarker', 'dấu ấn sinh học', 'The biomarker predicts the response to treatment.', 'Dấu ấn sinh học dự đoán đáp ứng điều trị.'],
        ['gene therapy', 'liệu pháp gen', 'Gene therapy may cure inherited diseases.', 'Liệu pháp gen có thể chữa các bệnh di truyền.'],
        ['cell therapy', 'liệu pháp tế bào', 'Cell therapy uses living cells as medicine.', 'Liệu pháp tế bào dùng tế bào sống làm thuốc.'],
      ],
      patterns: [
        ['The drug candidate entered phase II clinical trials last year.', 'Ứng viên thuốc bước vào thử nghiệm lâm sàng giai đoạn II năm ngoái.'],
        ['Patients were randomly assigned to receive the drug or a placebo.', 'Bệnh nhân được phân ngẫu nhiên nhận thuốc hoặc giả dược.'],
        ['The most common adverse events were mild headache and nausea.', 'Các biến cố bất lợi thường gặp nhất là đau đầu nhẹ và buồn nôn.'],
        ['Each batch must pass tests for sterility, endotoxin and potency.', 'Mỗi lô phải đạt các thử nghiệm về vô trùng, nội độc tố và hiệu lực.'],
        ['The company has applied for regulatory approval in several countries.', 'Công ty đã nộp hồ sơ xin phê duyệt tại nhiều quốc gia.'],
      ],
      dialogue: [
        ['A', 'What is the primary endpoint of the trial?', 'Tiêu chí đánh giá chính của thử nghiệm là gì?'],
        ['B', 'The reduction in tumor size after twelve weeks.', 'Mức giảm kích thước khối u sau mười hai tuần.'],
        ['A', 'Is it a double-blind study?', 'Đây có phải nghiên cứu mù đôi không?'],
        ['B', 'Yes, neither the patients nor the doctors know who receives the placebo.', 'Phải, cả bệnh nhân lẫn bác sĩ đều không biết ai nhận giả dược.'],
        ['A', 'Were there any serious adverse events?', 'Có biến cố bất lợi nghiêm trọng nào không?'],
        ['B', 'Only two, and both were reported to the safety committee.', 'Chỉ có hai, và cả hai đều đã được báo cáo cho hội đồng an toàn.'],
      ],
    },
    {
      id: 'cnsh-nong-nghiep-thuc-pham', title: 'CNSH nông nghiệp & thực phẩm', icon: '🌾', level: 'Nâng cao',
      desc: 'Giống cây trồng, chế phẩm sinh học, lên men thực phẩm, an toàn và bảo quản.',
      words: [
        ['agriculture', 'nông nghiệp', 'Agriculture feeds the world.', 'Nông nghiệp nuôi sống thế giới.'],
        ['agricultural biotechnology', 'công nghệ sinh học nông nghiệp', 'Agricultural biotechnology improves crop yield.', 'Công nghệ sinh học nông nghiệp cải thiện năng suất cây trồng.'],
        ['genetically modified', 'biến đổi gen', 'Genetically modified maize resists insects.', 'Ngô biến đổi gen kháng sâu.'],
        ['GMO', 'sinh vật biến đổi gen', 'GMO products must be labeled.', 'Sản phẩm biến đổi gen phải có nhãn.'],
        ['trait', 'tính trạng', 'Drought tolerance is a valuable trait.', 'Chịu hạn là một tính trạng quý.'],
        ['yield', 'năng suất', 'The new variety increases yield by 15 percent.', 'Giống mới tăng năng suất 15 phần trăm.'],
        ['variety', 'giống', 'This rice variety grows well in salty soil.', 'Giống lúa này phát triển tốt ở đất mặn.'],
        ['seed quality', 'chất lượng hạt giống', 'Seed quality affects germination.', 'Chất lượng hạt giống ảnh hưởng đến nảy mầm.'],
        ['biofertilizer', 'phân bón sinh học', 'Biofertilizer contains beneficial microbes.', 'Phân bón sinh học chứa vi sinh vật có lợi.'],
        ['biopesticide', 'thuốc trừ sâu sinh học', 'Bacillus thuringiensis is used as a biopesticide.', 'Bacillus thuringiensis được dùng làm thuốc trừ sâu sinh học.'],
        ['biological control', 'phòng trừ sinh học', 'Biological control uses natural enemies of pests.', 'Phòng trừ sinh học dùng thiên địch của sâu hại.'],
        ['integrated pest management', 'quản lý dịch hại tổng hợp', 'Integrated pest management reduces chemical use.', 'Quản lý dịch hại tổng hợp giảm việc dùng hóa chất.'],
        ['soil microbiome', 'hệ vi sinh đất', 'A healthy soil microbiome supports plant growth.', 'Hệ vi sinh đất khỏe hỗ trợ cây sinh trưởng.'],
        ['rhizobia', 'vi khuẩn nốt sần', 'Rhizobia live in the roots of legumes.', 'Vi khuẩn nốt sần sống trong rễ cây họ đậu.'],
        ['mycorrhiza', 'nấm rễ cộng sinh', 'Mycorrhiza helps roots absorb phosphorus.', 'Nấm rễ cộng sinh giúp rễ hấp thu phốt pho.'],
        ['compost', 'phân ủ', 'Compost improves the structure of the soil.', 'Phân ủ cải thiện cấu trúc đất.'],
        ['organic farming', 'nông nghiệp hữu cơ', 'Organic farming avoids synthetic chemicals.', 'Nông nghiệp hữu cơ tránh hóa chất tổng hợp.'],
        ['sustainable agriculture', 'nông nghiệp bền vững', 'Sustainable agriculture protects natural resources.', 'Nông nghiệp bền vững bảo vệ tài nguyên thiên nhiên.'],
        ['food security', 'an ninh lương thực', 'Food security is a global challenge.', 'An ninh lương thực là thách thức toàn cầu.'],
        ['food technology', 'công nghệ thực phẩm', 'Food technology extends shelf life.', 'Công nghệ thực phẩm kéo dài hạn dùng.'],
        ['food processing', 'chế biến thực phẩm', 'Food processing includes cooking and packaging.', 'Chế biến thực phẩm gồm nấu và đóng gói.'],
        ['fermented food', 'thực phẩm lên men', 'Yogurt is a fermented food.', 'Sữa chua là thực phẩm lên men.'],
        ['starter culture', 'giống khởi động', 'A starter culture is added to the milk.', 'Giống khởi động được thêm vào sữa.'],
        ['lactic acid bacteria', 'vi khuẩn lactic', 'Lactic acid bacteria ferment vegetables.', 'Vi khuẩn lactic lên men rau củ.'],
        ['yeast', 'nấm men', 'Yeast makes bread rise.', 'Nấm men làm bánh mì nở.'],
        ['brewing', 'sản xuất bia', 'Brewing depends on yeast fermentation.', 'Sản xuất bia dựa vào lên men nấm men.'],
        ['cheese', 'phô mai', 'Cheese is made by fermenting milk.', 'Phô mai được làm bằng cách lên men sữa.'],
        ['soy sauce', 'nước tương', 'Soy sauce is fermented for several months.', 'Nước tương được lên men nhiều tháng.'],
        ['fish sauce', 'nước mắm', 'Fish sauce is a traditional fermented product.', 'Nước mắm là sản phẩm lên men truyền thống.'],
        ['pickling', 'muối chua', 'Pickling preserves vegetables.', 'Muối chua bảo quản rau củ.'],
        ['enzyme', 'enzyme', 'An enzyme softens the fruit juice.', 'Một enzyme làm loãng nước ép trái cây.'],
        ['preservative', 'chất bảo quản', 'Natural preservatives are in high demand.', 'Chất bảo quản tự nhiên được ưa chuộng.'],
        ['shelf life', 'hạn dùng', 'Pasteurization extends the shelf life of milk.', 'Thanh trùng kéo dài hạn dùng của sữa.'],
        ['spoilage', 'sự hư hỏng', 'Spoilage is caused by microorganisms.', 'Sự hư hỏng do vi sinh vật gây ra.'],
        ['pathogen', 'mầm bệnh', 'Salmonella is a food pathogen.', 'Salmonella là mầm bệnh trong thực phẩm.'],
        ['food poisoning', 'ngộ độc thực phẩm', 'Food poisoning can be serious.', 'Ngộ độc thực phẩm có thể nghiêm trọng.'],
        ['food safety', 'an toàn thực phẩm', 'Food safety rules protect consumers.', 'Quy định an toàn thực phẩm bảo vệ người tiêu dùng.'],
        ['HACCP', 'HACCP', 'HACCP identifies critical control points.', 'HACCP xác định các điểm kiểm soát tới hạn.'],
        ['traceability', 'truy xuất nguồn gốc', 'Traceability allows a quick recall.', 'Truy xuất nguồn gốc cho phép thu hồi nhanh.'],
        ['nutrition', 'dinh dưỡng', 'Nutrition labels show the energy content.', 'Nhãn dinh dưỡng cho biết hàm lượng năng lượng.'],
        ['protein content', 'hàm lượng protein', 'The protein content of soy is high.', 'Hàm lượng protein của đậu nành cao.'],
        ['dietary fiber', 'chất xơ', 'Dietary fiber supports digestion.', 'Chất xơ hỗ trợ tiêu hóa.'],
        ['probiotic', 'probiotic', 'A probiotic yogurt contains live bacteria.', 'Sữa chua probiotic chứa vi khuẩn sống.'],
        ['prebiotic', 'prebiotic', 'A prebiotic feeds the good bacteria.', 'Prebiotic nuôi dưỡng vi khuẩn có lợi.'],
        ['functional food', 'thực phẩm chức năng', 'A functional food offers a health benefit.', 'Thực phẩm chức năng mang lại lợi ích sức khỏe.'],
        ['allergen', 'chất gây dị ứng', 'Allergens must be listed on the label.', 'Chất gây dị ứng phải được ghi trên nhãn.'],
        ['additive', 'phụ gia', 'Some additives are made by fermentation.', 'Một số phụ gia được tạo ra bằng lên men.'],
        ['aquaculture', 'nuôi trồng thủy sản', 'Aquaculture supplies half of the fish we eat.', 'Nuôi trồng thủy sản cung cấp một nửa lượng cá chúng ta ăn.'],
        ['animal feed', 'thức ăn chăn nuôi', 'Enzymes improve the digestion of animal feed.', 'Enzyme cải thiện việc tiêu hóa thức ăn chăn nuôi.'],
        ['livestock', 'gia súc', 'Probiotics can improve the health of livestock.', 'Probiotic có thể cải thiện sức khỏe gia súc.'],
      ],
      patterns: [
        ['Genetically modified crops can be engineered to resist pests and drought.', 'Cây trồng biến đổi gen có thể được thiết kế để kháng sâu bệnh và hạn hán.'],
        ['Fermentation is one of the oldest methods of food preservation.', 'Lên men là một trong những phương pháp bảo quản thực phẩm lâu đời nhất.'],
        ['A starter culture of lactic acid bacteria was added to the milk.', 'Một giống khởi động gồm vi khuẩn lactic được thêm vào sữa.'],
        ['The product was tested for pathogens before it left the factory.', 'Sản phẩm được kiểm tra mầm bệnh trước khi rời nhà máy.'],
        ['All ingredients must be listed on the label, including allergens.', 'Mọi thành phần phải được ghi trên nhãn, kể cả chất gây dị ứng.'],
      ],
      dialogue: [
        ['A', 'How long does the yogurt need to ferment?', 'Sữa chua cần lên men bao lâu?'],
        ['B', 'About eight hours at 42 degrees Celsius.', 'Khoảng tám giờ ở 42 độ C.'],
        ['A', 'Which starter culture are you using?', 'Bạn đang dùng giống khởi động nào?'],
        ['B', 'A mixture of Lactobacillus and Streptococcus.', 'Một hỗn hợp Lactobacillus và Streptococcus.'],
        ['A', 'What will you test before release?', 'Bạn sẽ kiểm tra gì trước khi xuất xưởng?'],
        ['B', 'The pH, the number of live bacteria and the absence of pathogens.', 'pH, số lượng vi khuẩn sống và sự vắng mặt của mầm bệnh.'],
      ],
    },
    {
      id: 'cnsh-moi-truong', title: 'CNSH môi trường', icon: '♻️', level: 'Nâng cao',
      desc: 'Xử lý nước thải, phân hủy sinh học, năng lượng sinh học và phục hồi môi trường.',
      words: [
        ['environmental biotechnology', 'công nghệ sinh học môi trường', 'Environmental biotechnology cleans polluted sites.', 'Công nghệ sinh học môi trường làm sạch các khu vực ô nhiễm.'],
        ['pollution', 'ô nhiễm', 'Water pollution threatens public health.', 'Ô nhiễm nước đe dọa sức khỏe cộng đồng.'],
        ['pollutant', 'chất ô nhiễm', 'This pollutant is toxic to fish.', 'Chất ô nhiễm này độc với cá.'],
        ['contaminant', 'chất gây nhiễm', 'The contaminant was found in the groundwater.', 'Chất gây nhiễm được tìm thấy trong nước ngầm.'],
        ['bioremediation', 'xử lý sinh học', 'Bioremediation uses microbes to clean soil.', 'Xử lý sinh học dùng vi sinh vật để làm sạch đất.'],
        ['biodegradation', 'phân hủy sinh học', 'Biodegradation breaks down organic matter.', 'Phân hủy sinh học làm tan chất hữu cơ.'],
        ['biodegradable', 'có thể phân hủy sinh học', 'Biodegradable plastic is made from starch.', 'Nhựa phân hủy sinh học làm từ tinh bột.'],
        ['degrade', 'phân hủy', 'Some bacteria degrade oil.', 'Một số vi khuẩn phân hủy dầu.'],
        ['oil spill', 'sự cố tràn dầu', 'Microbes help to clean up an oil spill.', 'Vi sinh vật giúp dọn dẹp sự cố tràn dầu.'],
        ['hydrocarbon', 'hydrocarbon', 'Bacteria use hydrocarbons as food.', 'Vi khuẩn dùng hydrocarbon làm thức ăn.'],
        ['heavy metal', 'kim loại nặng', 'Lead is a toxic heavy metal.', 'Chì là kim loại nặng độc hại.'],
        ['phytoremediation', 'xử lý bằng thực vật', 'Phytoremediation uses plants to absorb metals.', 'Xử lý bằng thực vật dùng cây để hấp thụ kim loại.'],
        ['biosorption', 'hấp phụ sinh học', 'Biosorption removes metals from water.', 'Hấp phụ sinh học loại kim loại khỏi nước.'],
        ['wastewater', 'nước thải', 'Wastewater must be treated before release.', 'Nước thải phải được xử lý trước khi thải ra.'],
        ['sewage', 'nước cống', 'Sewage contains many microorganisms.', 'Nước cống chứa nhiều vi sinh vật.'],
        ['wastewater treatment plant', 'nhà máy xử lý nước thải', 'The wastewater treatment plant serves 100,000 people.', 'Nhà máy xử lý nước thải phục vụ 100.000 người.'],
        ['activated sludge', 'bùn hoạt tính', 'Activated sludge contains many bacteria.', 'Bùn hoạt tính chứa nhiều vi khuẩn.'],
        ['sludge', 'bùn thải', 'The sludge is dried and used as fuel.', 'Bùn thải được sấy khô và dùng làm nhiên liệu.'],
        ['aerobic', 'hiếu khí', 'Aerobic treatment needs oxygen.', 'Xử lý hiếu khí cần oxy.'],
        ['anaerobic', 'kỵ khí', 'Anaerobic digestion produces biogas.', 'Phân hủy kỵ khí tạo ra khí sinh học.'],
        ['biogas', 'khí sinh học', 'Biogas can be used for cooking.', 'Khí sinh học có thể dùng để nấu ăn.'],
        ['methane', 'khí metan', 'Methane is the main component of biogas.', 'Metan là thành phần chính của khí sinh học.'],
        ['digester', 'bể phân hủy', 'The digester is heated to 35 degrees.', 'Bể phân hủy được gia nhiệt đến 35 độ.'],
        ['biofuel', 'nhiên liệu sinh học', 'Biofuel reduces carbon emissions.', 'Nhiên liệu sinh học giảm khí thải carbon.'],
        ['bioethanol', 'ethanol sinh học', 'Bioethanol is made from sugarcane.', 'Ethanol sinh học được làm từ mía.'],
        ['biodiesel', 'dầu diesel sinh học', 'Biodiesel is produced from vegetable oil.', 'Diesel sinh học được sản xuất từ dầu thực vật.'],
        ['biomass', 'sinh khối', 'Biomass is a renewable energy source.', 'Sinh khối là nguồn năng lượng tái tạo.'],
        ['renewable', 'có thể tái tạo', 'Renewable energy will replace fossil fuels.', 'Năng lượng tái tạo sẽ thay thế nhiên liệu hóa thạch.'],
        ['fossil fuel', 'nhiên liệu hóa thạch', 'Burning fossil fuel releases carbon dioxide.', 'Đốt nhiên liệu hóa thạch thải ra carbon dioxide.'],
        ['greenhouse gas', 'khí nhà kính', 'Methane is a powerful greenhouse gas.', 'Metan là khí nhà kính mạnh.'],
        ['carbon sequestration', 'thu giữ carbon', 'Forests help carbon sequestration.', 'Rừng giúp thu giữ carbon.'],
        ['microalgae', 'vi tảo', 'Microalgae can produce oil.', 'Vi tảo có thể tạo ra dầu.'],
        ['algal bloom', 'hiện tượng tảo nở hoa', 'An algal bloom can kill fish.', 'Hiện tượng tảo nở hoa có thể làm chết cá.'],
        ['eutrophication', 'phú dưỡng', 'Eutrophication is caused by excess nutrients.', 'Phú dưỡng do dư thừa chất dinh dưỡng gây ra.'],
        ['nitrogen removal', 'loại bỏ nitơ', 'Nitrogen removal prevents eutrophication.', 'Loại bỏ nitơ ngăn ngừa phú dưỡng.'],
        ['nitrification', 'nitrat hóa', 'Nitrification is carried out by bacteria.', 'Nitrat hóa do vi khuẩn thực hiện.'],
        ['denitrification', 'khử nitrat', 'Denitrification releases nitrogen gas.', 'Khử nitrat thải ra khí nitơ.'],
        ['phosphorus', 'phốt pho', 'Excess phosphorus pollutes lakes.', 'Phốt pho dư thừa làm ô nhiễm hồ.'],
        ['bioindicator', 'sinh vật chỉ thị', 'Some insects are bioindicators of clean water.', 'Một số côn trùng là sinh vật chỉ thị của nước sạch.'],
        ['biosensor', 'cảm biến sinh học', 'A biosensor detects toxins in water.', 'Cảm biến sinh học phát hiện độc tố trong nước.'],
        ['monitoring', 'giám sát', 'Regular monitoring detects pollution early.', 'Giám sát thường xuyên phát hiện ô nhiễm sớm.'],
        ['environmental impact', 'tác động môi trường', 'An environmental impact assessment is required.', 'Cần có đánh giá tác động môi trường.'],
        ['regulation', 'quy định', 'Strict regulations limit industrial discharge.', 'Các quy định nghiêm ngặt hạn chế xả thải công nghiệp.'],
        ['discharge', 'sự xả thải', 'The discharge must meet the standard.', 'Nước xả phải đạt tiêu chuẩn.'],
        ['recycling', 'tái chế', 'Recycling reduces waste.', 'Tái chế giảm rác thải.'],
        ['circular economy', 'kinh tế tuần hoàn', 'A circular economy reuses resources.', 'Kinh tế tuần hoàn tái sử dụng tài nguyên.'],
        ['bioplastic', 'nhựa sinh học', 'Bioplastic can be made by bacteria.', 'Nhựa sinh học có thể do vi khuẩn tạo ra.'],
        ['composting', 'ủ phân', 'Composting turns waste into fertilizer.', 'Ủ phân biến rác thành phân bón.'],
        ['soil remediation', 'phục hồi đất', 'Soil remediation took three years.', 'Phục hồi đất mất ba năm.'],
        ['sustainability', 'tính bền vững', 'Sustainability guides our research.', 'Tính bền vững định hướng nghiên cứu của chúng tôi.'],
        ['ecosystem', 'hệ sinh thái', 'The project restored the wetland ecosystem.', 'Dự án phục hồi hệ sinh thái đất ngập nước.'],
      ],
      patterns: [
        ['Certain bacteria can degrade hydrocarbons and help clean up oil spills.', 'Một số vi khuẩn có thể phân hủy hydrocarbon và giúp dọn dẹp sự cố tràn dầu.'],
        ['Anaerobic digestion converts organic waste into biogas and fertilizer.', 'Phân hủy kỵ khí biến chất thải hữu cơ thành khí sinh học và phân bón.'],
        ['Wastewater is treated by activated sludge before it is released into the river.', 'Nước thải được xử lý bằng bùn hoạt tính trước khi thải ra sông.'],
        ['Excess nitrogen and phosphorus can cause algal blooms in lakes.', 'Dư thừa nitơ và phốt pho có thể gây tảo nở hoa trong hồ.'],
        ['Biodegradable plastics reduce the long-term impact on the environment.', 'Nhựa phân hủy sinh học giảm tác động lâu dài lên môi trường.'],
      ],
      dialogue: [
        ['A', 'What is the main goal of this bioremediation project?', 'Mục tiêu chính của dự án xử lý sinh học này là gì?'],
        ['B', 'To remove oil from the soil using native bacteria.', 'Loại bỏ dầu khỏi đất bằng vi khuẩn bản địa.'],
        ['A', 'How will you measure the progress?', 'Bạn sẽ đo tiến độ bằng cách nào?'],
        ['B', 'We will sample the soil every month and measure hydrocarbon levels.', 'Mỗi tháng chúng tôi sẽ lấy mẫu đất và đo hàm lượng hydrocarbon.'],
        ['A', 'Is any nutrient added?', 'Có bổ sung chất dinh dưỡng nào không?'],
        ['B', 'Yes, nitrogen and phosphorus, to stimulate the microbes.', 'Có, nitơ và phốt pho, để kích thích vi sinh vật.'],
      ],
    },
    {
      id: 'thong-ke-thi-nghiem', title: 'Thống kê & thiết kế thí nghiệm', icon: '📊', level: 'Nâng cao',
      desc: 'Giả thuyết, biến số, mẫu, kiểm định thống kê và cách trình bày dữ liệu.',
      words: [
        ['statistics', 'thống kê', 'Statistics helps us interpret data.', 'Thống kê giúp chúng ta diễn giải dữ liệu.'],
        ['data', 'dữ liệu', 'The data were collected in triplicate.', 'Dữ liệu được thu thập lặp lại ba lần.'],
        ['dataset', 'tập dữ liệu', 'The dataset contains 500 samples.', 'Tập dữ liệu gồm 500 mẫu.'],
        ['hypothesis', 'giả thuyết', 'We tested the hypothesis with an experiment.', 'Chúng tôi kiểm chứng giả thuyết bằng một thí nghiệm.'],
        ['null hypothesis', 'giả thuyết không', 'The null hypothesis states that there is no difference.', 'Giả thuyết không cho rằng không có sự khác biệt.'],
        ['alternative hypothesis', 'giả thuyết đối', 'The alternative hypothesis predicts an effect.', 'Giả thuyết đối dự đoán có một tác động.'],
        ['variable', 'biến số', 'Temperature is the independent variable.', 'Nhiệt độ là biến độc lập.'],
        ['independent variable', 'biến độc lập', 'The independent variable is changed by the researcher.', 'Biến độc lập do nhà nghiên cứu thay đổi.'],
        ['dependent variable', 'biến phụ thuộc', 'Growth rate is the dependent variable.', 'Tốc độ sinh trưởng là biến phụ thuộc.'],
        ['control', 'đối chứng', 'Each experiment includes a negative control.', 'Mỗi thí nghiệm đều có một đối chứng âm.'],
        ['positive control', 'đối chứng dương', 'The positive control confirms the assay works.', 'Đối chứng dương xác nhận phép thử hoạt động.'],
        ['negative control', 'đối chứng âm', 'The negative control showed no signal.', 'Đối chứng âm không cho tín hiệu.'],
        ['treatment', 'nghiệm thức (xử lý)', 'Each treatment was repeated three times.', 'Mỗi nghiệm thức được lặp lại ba lần.'],
        ['replicate', 'lần lặp lại', 'We used three biological replicates.', 'Chúng tôi dùng ba lần lặp lại sinh học.'],
        ['technical replicate', 'lặp lại kỹ thuật', 'Technical replicates reduce pipetting error.', 'Lặp lại kỹ thuật giảm sai số pipet.'],
        ['biological replicate', 'lặp lại sinh học', 'Biological replicates capture natural variation.', 'Lặp lại sinh học ghi nhận biến thiên tự nhiên.'],
        ['sample size', 'cỡ mẫu', 'A larger sample size gives more reliable results.', 'Cỡ mẫu lớn hơn cho kết quả đáng tin hơn.'],
        ['population', 'quần thể, tổng thể', 'The sample represents the whole population.', 'Mẫu đại diện cho toàn bộ tổng thể.'],
        ['random', 'ngẫu nhiên', 'Samples were chosen at random.', 'Các mẫu được chọn ngẫu nhiên.'],
        ['randomization', 'sự ngẫu nhiên hóa', 'Randomization reduces bias.', 'Ngẫu nhiên hóa giảm sai lệch.'],
        ['bias', 'sai lệch hệ thống', 'Blinding helps to avoid bias.', 'Làm mù giúp tránh sai lệch.'],
        ['mean', 'giá trị trung bình', 'The mean value was 12.4.', 'Giá trị trung bình là 12,4.'],
        ['median', 'trung vị', 'The median is less affected by outliers.', 'Trung vị ít bị ảnh hưởng bởi giá trị ngoại lai.'],
        ['mode', 'yếu vị', 'The mode is the most frequent value.', 'Yếu vị là giá trị xuất hiện nhiều nhất.'],
        ['standard deviation', 'độ lệch chuẩn', 'The standard deviation was small.', 'Độ lệch chuẩn nhỏ.'],
        ['standard error', 'sai số chuẩn', 'Error bars show the standard error.', 'Thanh sai số biểu thị sai số chuẩn.'],
        ['variance', 'phương sai', 'The variance was similar in both groups.', 'Phương sai tương tự ở cả hai nhóm.'],
        ['range', 'khoảng giá trị', 'The range was between 3 and 9.', 'Khoảng giá trị nằm giữa 3 và 9.'],
        ['outlier', 'giá trị ngoại lai', 'One outlier was removed.', 'Một giá trị ngoại lai đã bị loại.'],
        ['distribution', 'phân phối', 'The data follow a normal distribution.', 'Dữ liệu tuân theo phân phối chuẩn.'],
        ['normal distribution', 'phân phối chuẩn', 'A normal distribution looks like a bell curve.', 'Phân phối chuẩn có dạng hình chuông.'],
        ['t-test', 'kiểm định t', 'A t-test compared the two groups.', 'Kiểm định t so sánh hai nhóm.'],
        ['ANOVA', 'phân tích phương sai', 'ANOVA compares three or more groups.', 'ANOVA so sánh ba nhóm trở lên.'],
        ['chi-square test', 'kiểm định chi bình phương', 'A chi-square test analyzed the frequencies.', 'Kiểm định chi bình phương phân tích tần suất.'],
        ['correlation', 'tương quan', 'There was a strong correlation between the two variables.', 'Có mối tương quan mạnh giữa hai biến.'],
        ['regression', 'hồi quy', 'Linear regression fits a line to the data.', 'Hồi quy tuyến tính khớp một đường thẳng với dữ liệu.'],
        ['p-value', 'giá trị p', 'The p-value was 0.03.', 'Giá trị p là 0,03.'],
        ['significance level', 'mức ý nghĩa', 'The significance level was set at 0.05.', 'Mức ý nghĩa được đặt ở 0,05.'],
        ['statistically significant', 'có ý nghĩa thống kê', 'The difference was statistically significant.', 'Sự khác biệt có ý nghĩa thống kê.'],
        ['confidence interval', 'khoảng tin cậy', 'The 95 percent confidence interval was narrow.', 'Khoảng tin cậy 95 phần trăm hẹp.'],
        ['type I error', 'sai lầm loại I', 'A type I error is a false positive.', 'Sai lầm loại I là dương tính giả.'],
        ['type II error', 'sai lầm loại II', 'A type II error is a false negative.', 'Sai lầm loại II là âm tính giả.'],
        ['power', 'lực kiểm định', 'The study had enough power to detect the effect.', 'Nghiên cứu có đủ lực kiểm định để phát hiện tác động.'],
        ['reproducibility', 'khả năng tái lập', 'Reproducibility is essential in science.', 'Khả năng tái lập là thiết yếu trong khoa học.'],
        ['calibration curve', 'đường chuẩn', 'We drew a calibration curve with five standards.', 'Chúng tôi vẽ đường chuẩn với năm mẫu chuẩn.'],
        ['detection limit', 'giới hạn phát hiện', 'The detection limit of the assay is low.', 'Giới hạn phát hiện của phép thử thấp.'],
        ['accuracy', 'độ chính xác (đúng)', 'Accuracy shows how close a result is to the true value.', 'Độ đúng cho biết kết quả gần giá trị thật đến mức nào.'],
        ['precision', 'độ chính xác (lặp lại)', 'Precision describes the repeatability of the results.', 'Độ chụm mô tả khả năng lặp lại của kết quả.'],
        ['bar chart', 'biểu đồ cột', 'The results are shown in a bar chart.', 'Kết quả được thể hiện trong biểu đồ cột.'],
        ['scatter plot', 'biểu đồ phân tán', 'A scatter plot shows the relationship between two variables.', 'Biểu đồ phân tán cho thấy mối quan hệ giữa hai biến.'],
        ['error bar', 'thanh sai số', 'Error bars show the variation in the data.', 'Thanh sai số thể hiện sự biến thiên của dữ liệu.'],
      ],
      patterns: [
        ['All experiments were performed in triplicate and repeated at least twice.', 'Mọi thí nghiệm được thực hiện ba lần lặp lại và lặp lại ít nhất hai lần.'],
        ['Data are presented as mean plus or minus standard deviation.', 'Số liệu được trình bày dưới dạng trung bình cộng trừ độ lệch chuẩn.'],
        ['Differences were considered statistically significant when the p-value was below 0.05.', 'Các khác biệt được coi là có ý nghĩa thống kê khi giá trị p nhỏ hơn 0,05.'],
        ['One-way ANOVA followed by Tukey\'s test was used to compare the groups.', 'ANOVA một yếu tố rồi kiểm định Tukey được dùng để so sánh các nhóm.'],
        ['The correlation between the two variables was strong but not perfect.', 'Mối tương quan giữa hai biến mạnh nhưng không hoàn hảo.'],
      ],
      dialogue: [
        ['A', 'How many replicates did you use for each treatment?', 'Bạn dùng bao nhiêu lần lặp lại cho mỗi nghiệm thức?'],
        ['B', 'Three biological replicates, each measured twice.', 'Ba lần lặp lại sinh học, mỗi lần đo hai lần.'],
        ['A', 'Which test will you apply to compare the four groups?', 'Bạn sẽ dùng phép kiểm định nào để so sánh bốn nhóm?'],
        ['B', 'A one-way ANOVA, since the data are normally distributed.', 'ANOVA một yếu tố, vì dữ liệu có phân phối chuẩn.'],
        ['A', 'What if the p-value is above 0.05?', 'Nếu giá trị p lớn hơn 0,05 thì sao?'],
        ['B', 'Then we cannot say the difference is statistically significant.', 'Khi đó chúng ta không thể nói sự khác biệt có ý nghĩa thống kê.'],
      ],
    },
  ],
  reads: {
    'cnsh-y-duoc': {
      title: 'From Laboratory to Pharmacy',
      text: 'Developing a new drug is a long and expensive journey. It begins with the discovery of a target, usually a protein involved in a disease. Researchers screen thousands of compounds and choose a lead compound, which is then optimized. Before it can be given to people, the candidate is tested in cells and animals in preclinical studies. If the results are promising, clinical trials begin. Phase I tests safety in a small group of healthy volunteers, phase II studies efficacy and dose, and phase III compares the drug with a placebo or standard treatment in hundreds or thousands of patients. After approval by regulators, the manufacturer must continue to monitor side effects, a process called pharmacovigilance. On average, the whole process takes ten years or more.',
      vi: 'Phát triển thuốc đi từ tìm đích tác động, sàng lọc hợp chất, thử tiền lâm sàng, ba pha lâm sàng, phê duyệt rồi giám sát sau lưu hành; thường mất hơn mười năm.',
      qs: [
        ['What does phase I test?', ['Efficacy in thousands of patients', 'Safety in a small group', 'Marketing', 'Cost'], 1],
        ['What happens in preclinical studies?', ['Tests in cells and animals', 'Tests in thousands of patients', 'Regulatory approval', 'Packaging'], 0],
        ['What is pharmacovigilance?', ['Drug advertising', 'Monitoring side effects after approval', 'Selecting a target', 'Making tablets'], 1],
      ],
    },
    'cnsh-nong-nghiep-thuc-pham': {
      title: 'Fermentation: An Ancient Technology',
      text: 'People have used fermentation for thousands of years, long before they knew that microorganisms existed. In fermentation, bacteria, yeasts or molds convert sugars into acids, gases or alcohol. Yogurt, cheese, soy sauce, fish sauce, bread and beer are all products of fermentation. Besides creating new flavors, fermentation helps to preserve food, because the acids and alcohol prevent the growth of spoilage microorganisms. Today, food companies use carefully selected starter cultures to obtain consistent quality and to make sure no dangerous pathogens grow. Some fermented foods also contain live probiotic bacteria that may support digestion and health. Modern food safety systems, such as HACCP, control each critical step from raw materials to the finished product.',
      vi: 'Lên men dùng vi sinh vật biến đường thành acid, khí hoặc cồn, tạo hương vị và bảo quản thực phẩm; ngày nay dùng giống khởi động và HACCP để bảo đảm chất lượng.',
      qs: [
        ['What does fermentation convert?', ['Metals into gases', 'Sugars into acids, gases or alcohol', 'Salt into sugar', 'Water into oil'], 1],
        ['Why does fermentation help preserve food?', ['It removes water.', 'Acids and alcohol prevent spoilage microorganisms.', 'It freezes the food.', 'It adds plastic.'], 1],
        ['Why do companies use starter cultures?', ['To get consistent quality', 'To make food expensive', 'To remove flavor', 'To avoid packaging'], 0],
      ],
    },
    'cnsh-moi-truong': {
      title: 'Microbes That Clean Up',
      text: 'Many microorganisms can use pollutants as a source of energy and carbon. Environmental biotechnology takes advantage of this ability. In bioremediation, bacteria or fungi are used to break down contaminants such as oil or pesticides in soil and water. Sometimes nutrients are added to stimulate the native microbes, which is cheaper than removing the soil. In wastewater treatment plants, activated sludge containing many bacteria removes organic matter, nitrogen and phosphorus before the water returns to the river. The remaining sludge can be digested without oxygen to produce biogas, a renewable fuel. Although these methods are slower than chemical treatment, they are usually cheaper and cause less damage to ecosystems.',
      vi: 'Vi sinh vật dùng chất ô nhiễm làm thức ăn nên được dùng để xử lý đất, nước và nước thải, tạo cả khí sinh học; chậm hơn nhưng rẻ và ít hại hệ sinh thái.',
      qs: [
        ['What is bioremediation?', ['Using organisms to break down contaminants', 'Burning waste', 'Building dams', 'Making plastic'], 0],
        ['What can be produced from sludge digested without oxygen?', ['Biogas', 'Gold', 'Salt', 'Glass'], 0],
        ['What is an advantage of these methods?', ['They are faster than chemicals.', 'They are usually cheaper and cause less damage.', 'They need no microbes.', 'They create pollution.'], 1],
      ],
    },
    'thong-ke-thi-nghiem': {
      title: 'Is the Difference Real?',
      text: 'Imagine that two groups of plants are given different fertilizers, and the plants in group A grow taller on average. Is the difference real, or did it happen by chance? Statistics helps us answer this question. First, we state a null hypothesis, which says that the fertilizers have the same effect. Then we collect data from several replicates, because a single measurement is not reliable. A statistical test, such as a t-test, calculates a p-value: the probability of seeing such a difference if the null hypothesis were true. If the p-value is lower than the significance level, usually 0.05, we say the difference is statistically significant. However, a significant result does not prove the hypothesis, and it is important to report the sample size, the mean, the standard deviation and the test used.',
      vi: 'Thống kê giúp biết sự khác biệt giữa hai nhóm là thật hay do ngẫu nhiên: đặt giả thuyết không, lặp lại thí nghiệm, tính giá trị p và so với mức ý nghĩa 0,05.',
      qs: [
        ['What does the null hypothesis say?', ['The treatments have the same effect.', 'Group A is taller.', 'The data are wrong.', 'The test is useless.'], 0],
        ['What does the p-value show?', ['The mean height', 'The probability of such a difference if the null hypothesis were true', 'The number of plants', 'The fertilizer price'], 1],
        ['Why do we use several replicates?', ['A single measurement is not reliable.', 'It is cheaper.', 'The test requires fertilizer.', 'It reduces the sample size.'], 0],
      ],
    },
  },
  defs: `
pharmaceutical = relating to the making and selling of medicines
biopharmaceutical = a medicine made from living cells
biologic = a medicine made from living organisms
drug discovery = the process of finding new medicines
drug development = the process of turning a new compound into a safe medicine
target = a molecule in the body that a drug acts on
lead compound = a promising chemical chosen for further drug development
screening = testing many things to find the useful ones
assay = a test to measure the activity or amount of something
preclinical = describing research before a drug is tested in people
clinical trial = a test of a medicine on people
phase I = the first stage of a clinical trial, mainly testing safety
placebo = a harmless substance given instead of a real medicine
randomized = chosen by chance
double-blind = a test where neither doctor nor patient knows who gets the real drug
informed consent = permission given after the risks have been explained
endpoint = the main result used to judge a trial
efficacy = the ability of a drug to produce the wanted effect
safety profile = a summary of the safety of a drug
adverse event = an unwanted medical problem that occurs during treatment
side effect = an unwanted effect of a medicine
dose = the amount of medicine taken at one time
dosage = the amount and timing of a medicine
pharmacokinetics = the study of how a drug moves through the body
pharmacodynamics = the study of the effects of a drug on the body
bioavailability = the amount of a drug that reaches the blood
half-life = the time taken for the amount of a drug to fall by half
excipient = an inactive substance added to a medicine
injection = a medicine put into the body with a needle
recombinant protein = a protein made from DNA joined from different sources
expression system = a host cell used to make a protein
upstream = the early stages of production, such as growing cells
downstream = the later stages of production, such as purification
purification = removing unwanted substances to get a pure product
impurity = an unwanted substance in a product
sterility = the state of being free from living germs
endotoxin = a harmful substance from the walls of some bacteria
potency = the strength of a drug
biosimilar = a biological medicine that is very similar to an approved one
generic = a medicine sold under its chemical name, not a brand
patent = an official right to be the only one to make an invention
regulatory approval = official permission to sell a medicine
marketing authorization = official permission to put a medicine on the market
post-marketing = happening after a medicine is available for sale
pharmacovigilance = monitoring the safety of medicines after they are on the market
personalized medicine = treatment chosen to fit a person's genes
biomarker = a measurable sign of a disease or a response to treatment
cell therapy = treatment that uses living cells
agriculture = the science and practice of farming
agricultural biotechnology = using biology to improve crops and farm animals
GMO = an organism whose genes have been changed by people
trait = a particular characteristic of a living thing
yield = the amount of a crop produced
variety = a particular type of a plant
seed quality = how healthy and capable of growing a seed is
biofertilizer = a fertilizer made of living microorganisms
biopesticide = a pest killer made from natural organisms
biological control = using living organisms to control pests
integrated pest management = controlling pests with several methods together
soil microbiome = the community of microbes living in soil
rhizobia = bacteria that live in the roots of legumes and fix nitrogen
mycorrhiza = a fungus that lives with plant roots and helps them
compost = rotted plant waste used to improve soil
organic farming = farming without synthetic chemicals
sustainable agriculture = farming that does not harm the environment
food security = having reliable access to enough food
food technology = the use of science to make and keep food
food processing = the methods used to turn raw food into products
fermented food = food made using microbes that change its flavor
starter culture = microbes added to start fermentation
lactic acid bacteria = bacteria that make lactic acid
yeast = a tiny fungus used to make bread and alcohol
brewing = making beer
cheese = a food made from milk curds
soy sauce = a salty sauce made from fermented soybeans
fish sauce = a salty liquid made by fermenting fish
pickling = preserving food in salt or acid
preservative = a substance that stops food from going bad
spoilage = the process of food going bad
food poisoning = illness caused by eating contaminated food
food safety = keeping food free from harm
HACCP = a system for finding and controlling food safety hazards
nutrition = the food needed for growth and health
protein content = the amount of protein in a food
dietary fiber = plant material that helps digestion
probiotic = a living microorganism that is good for health
prebiotic = a substance that feeds helpful gut bacteria
functional food = food that gives a health benefit beyond basic nutrition
additive = a substance added to food to improve it
animal feed = food given to farm animals
environmental biotechnology = using living things to solve environmental problems
pollutant = a substance that makes air, water or soil dirty
contaminant = a substance that makes something impure
bioremediation = using living things to clean up polluted places
biodegradation = breakdown of substances by living organisms
biodegradable = able to be broken down naturally by living things
degrade = to break down into simpler parts
oil spill = oil accidentally released into the sea or land
hydrocarbon = a compound of hydrogen and carbon, such as oil
heavy metal = a toxic metal such as lead or mercury
phytoremediation = using plants to remove pollution
biosorption = removal of substances using biological material
wastewater = used water from homes and industry
sewage = waste water and waste from toilets
wastewater treatment plant = a factory that cleans used water
activated sludge = a mixture of bacteria used to treat wastewater
sludge = soft wet mud left after treatment
aerobic = needing oxygen
anaerobic = without oxygen
biogas = a gas made when organic waste decays
methane = a gas used as fuel and a cause of global warming
digester = a tank where waste is broken down by microbes
biofuel = fuel made from plants or other living material
bioethanol = alcohol fuel made from plants
biodiesel = diesel fuel made from vegetable oil or fat
biomass = organic material used as an energy source
renewable = able to be replaced naturally
fossil fuel = coal, oil or gas
greenhouse gas = a gas that traps heat in the atmosphere
carbon sequestration = capturing and storing carbon dioxide
microalgae = tiny plant-like organisms that live in water
algal bloom = a fast growth of algae in water
eutrophication = too many nutrients in water causing excess algae
nitrogen removal = taking nitrogen compounds out of wastewater
nitrification = the conversion of ammonia to nitrate by bacteria
denitrification = the conversion of nitrate to nitrogen gas by bacteria
phosphorus = an element needed by plants and a cause of water pollution
bioindicator = a living thing that shows the condition of the environment
biosensor = a device that uses biological material to detect a substance
monitoring = watching something over time
environmental impact = the effect of an activity on nature
discharge = the release of liquid or gas into the environment
recycling = treating waste so it can be used again
circular economy = an economic system that reuses materials
bioplastic = plastic made from natural materials
composting = making compost from plant waste
soil remediation = cleaning polluted soil
sustainability = using resources without harming the future
statistics = the science of collecting and analyzing numbers
data = facts and numbers collected for study
dataset = a collection of data
hypothesis = an idea that can be tested
null hypothesis = the assumption that there is no effect or difference
alternative hypothesis = the idea that there is an effect or difference
variable = a factor that can change in an experiment
independent variable = the factor that the researcher changes
dependent variable = the factor that is measured
control = a sample used for comparison
positive control = a control that is expected to give a positive result
negative control = a control that is expected to give no result
treatment = what is done to a group in an experiment
replicate = a repeat of an experiment or measurement
technical replicate = a repeat measurement of the same sample
biological replicate = a repeat using a different living sample
sample size = the number of items studied
population = the whole group that a sample comes from
random = happening by chance
randomization = assigning things to groups by chance
bias = a systematic error that favors one result
mean = the average of a set of numbers
median = the middle value in a list of numbers
mode = the value that appears most often
standard deviation = a measure of how spread out the numbers are
standard error = a measure of how accurate a mean is
variance = the square of the standard deviation
range = the difference between the highest and lowest value
outlier = a value very different from the others
distribution = how values are spread in a dataset
normal distribution = a bell-shaped spread of data
t-test = a test that compares the means of two groups
ANOVA = a test that compares the means of three or more groups
chi-square test = a test that compares observed and expected counts
correlation = a connection between two variables
regression = a method for finding the relationship between variables
significance level = the limit used to decide if a result is significant
statistically significant = unlikely to have happened by chance
type I error = wrongly deciding there is an effect
type II error = wrongly deciding there is no effect
power = the chance that a test finds a real effect
reproducibility = the ability to get the same result again
calibration curve = a graph made from known standards to measure unknown samples
detection limit = the smallest amount that can be detected
accuracy = how close a result is to the true value
precision = how close repeated results are to each other
bar chart = a graph with bars to compare values
scatter plot = a graph with dots showing two variables
error bar = a line on a graph showing the variation in data
`,
};
