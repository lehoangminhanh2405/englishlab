// Đợt 1 chủ đề chuyên ngành CNSH: động vật học, thực vật học, hóa sinh, tin sinh học.
export const batch = {
  track: 'chuyen-nganh',
  topics: [
    {
      id: 'dong-vat-hoc', title: 'Động vật học', icon: '🐾', level: 'Nền tảng',
      desc: 'Phân loại, cơ quan, hành vi, sinh sản và tiến hóa của động vật.',
      words: [
        ['zoology', 'động vật học', 'Zoology is the study of animals.', 'Động vật học là ngành nghiên cứu về động vật.'],
        ['species', 'loài', 'This species lives only in Vietnam.', 'Loài này chỉ sống ở Việt Nam.'],
        ['genus', 'chi (phân loại)', 'Each genus contains several species.', 'Mỗi chi gồm nhiều loài.'],
        ['taxonomy', 'phân loại học', 'Taxonomy organizes living things into groups.', 'Phân loại học sắp xếp sinh vật thành các nhóm.'],
        ['vertebrate', 'động vật có xương sống', 'Fish are vertebrates.', 'Cá là động vật có xương sống.'],
        ['invertebrate', 'động vật không xương sống', 'Insects are invertebrates.', 'Côn trùng là động vật không xương sống.'],
        ['mammal', 'động vật có vú', 'A whale is a mammal, not a fish.', 'Cá voi là động vật có vú, không phải cá.'],
        ['reptile', 'bò sát', 'A reptile has dry, scaly skin.', 'Bò sát có da khô và có vảy.'],
        ['amphibian', 'lưỡng cư', 'A frog is an amphibian.', 'Ếch là loài lưỡng cư.'],
        ['insect', 'côn trùng', 'An insect has six legs.', 'Côn trùng có sáu chân.'],
        ['predator', 'động vật săn mồi', 'The tiger is a top predator.', 'Hổ là loài săn mồi đầu bảng.'],
        ['prey', 'con mồi', 'The deer was easy prey.', 'Con hươu là con mồi dễ bắt.'],
        ['herbivore', 'động vật ăn cỏ', 'A cow is a herbivore.', 'Bò là động vật ăn cỏ.'],
        ['carnivore', 'động vật ăn thịt', 'A lion is a carnivore.', 'Sư tử là động vật ăn thịt.'],
        ['omnivore', 'động vật ăn tạp', 'Humans are omnivores.', 'Con người là động vật ăn tạp.'],
        ['food chain', 'chuỗi thức ăn', 'Every food chain starts with plants.', 'Mọi chuỗi thức ăn đều bắt đầu từ thực vật.'],
        ['migration', 'sự di cư', 'Bird migration happens every autumn.', 'Chim di cư xảy ra vào mỗi mùa thu.'],
        ['hibernation', 'ngủ đông', 'Bears survive winter through hibernation.', 'Gấu sống sót qua mùa đông nhờ ngủ đông.'],
        ['metamorphosis', 'biến thái', 'A caterpillar undergoes metamorphosis.', 'Sâu bướm trải qua quá trình biến thái.'],
        ['larva', 'ấu trùng', 'The larva feeds on leaves.', 'Ấu trùng ăn lá cây.'],
        ['skeleton', 'bộ xương', 'The skeleton supports the body.', 'Bộ xương nâng đỡ cơ thể.'],
        ['muscle', 'cơ', 'Muscle contracts to produce movement.', 'Cơ co lại để tạo ra chuyển động.'],
        ['nervous system', 'hệ thần kinh', 'The nervous system controls behavior.', 'Hệ thần kinh điều khiển hành vi.'],
        ['circulatory system', 'hệ tuần hoàn', 'The circulatory system carries blood.', 'Hệ tuần hoàn vận chuyển máu.'],
        ['respiratory system', 'hệ hô hấp', 'Lungs belong to the respiratory system.', 'Phổi thuộc hệ hô hấp.'],
        ['digestive system', 'hệ tiêu hóa', 'The digestive system breaks down food.', 'Hệ tiêu hóa phân giải thức ăn.'],
        ['organ system', 'hệ cơ quan', 'Each organ system has a specific role.', 'Mỗi hệ cơ quan có một vai trò riêng.'],
        ['gill', 'mang (cá)', 'Fish breathe through gills.', 'Cá thở bằng mang.'],
        ['lung', 'phổi', 'Mammals breathe with lungs.', 'Động vật có vú thở bằng phổi.'],
        ['warm-blooded', 'máu nóng, hằng nhiệt', 'Birds are warm-blooded animals.', 'Chim là động vật máu nóng.'],
        ['cold-blooded', 'máu lạnh, biến nhiệt', 'Snakes are cold-blooded.', 'Rắn là động vật máu lạnh.'],
        ['reproduction', 'sinh sản', 'Reproduction ensures the survival of a species.', 'Sinh sản bảo đảm sự tồn tại của loài.'],
        ['fertilization', 'sự thụ tinh', 'Fertilization occurs when sperm meets egg.', 'Thụ tinh xảy ra khi tinh trùng gặp trứng.'],
        ['embryo', 'phôi', 'The embryo develops inside the egg.', 'Phôi phát triển bên trong quả trứng.'],
        ['gestation', 'thời gian mang thai', 'Elephants have a long gestation period.', 'Voi có thời gian mang thai rất dài.'],
        ['offspring', 'con cái, thế hệ con', 'The female protects her offspring.', 'Con cái bảo vệ đàn con của mình.'],
        ['lifespan', 'tuổi thọ', 'The lifespan of a mouse is about two years.', 'Tuổi thọ của chuột khoảng hai năm.'],
        ['behavior', 'hành vi', 'Animal behavior can be learned or innate.', 'Hành vi động vật có thể do học hoặc bẩm sinh.'],
        ['instinct', 'bản năng', 'Birds build nests by instinct.', 'Chim làm tổ theo bản năng.'],
        ['camouflage', 'ngụy trang', 'The chameleon uses camouflage to hide.', 'Tắc kè hoa dùng ngụy trang để ẩn nấp.'],
        ['adaptation', 'sự thích nghi', 'Thick fur is an adaptation to cold.', 'Bộ lông dày là sự thích nghi với giá lạnh.'],
        ['natural selection', 'chọn lọc tự nhiên', 'Natural selection favors the fittest individuals.', 'Chọn lọc tự nhiên ưu tiên các cá thể thích nghi nhất.'],
        ['evolution', 'sự tiến hóa', 'Evolution takes place over many generations.', 'Tiến hóa diễn ra qua nhiều thế hệ.'],
        ['endangered species', 'loài nguy cấp', 'The saola is an endangered species.', 'Sao la là loài nguy cấp.'],
        ['conservation', 'bảo tồn', 'Wildlife conservation protects biodiversity.', 'Bảo tồn động vật hoang dã bảo vệ đa dạng sinh học.'],
        ['model organism', 'sinh vật mô hình', 'The zebrafish is a popular model organism.', 'Cá ngựa vằn là sinh vật mô hình phổ biến.'],
        ['livestock', 'gia súc, vật nuôi', 'Livestock need clean water and feed.', 'Vật nuôi cần nước sạch và thức ăn.'],
        ['veterinary', 'thú y', 'Veterinary medicine treats animal diseases.', 'Thú y chữa các bệnh của động vật.'],
        ['aquaculture', 'nuôi trồng thủy sản', 'Aquaculture produces fish and shrimp.', 'Nuôi trồng thủy sản tạo ra cá và tôm.'],
        ['biodiversity', 'đa dạng sinh học', 'Rainforests have high biodiversity.', 'Rừng nhiệt đới có đa dạng sinh học cao.'],
      ],
      patterns: [
        ['Mammals are warm-blooded animals that feed their young with milk.', 'Động vật có vú là động vật máu nóng nuôi con bằng sữa.'],
        ['The tiger is at the top of the food chain.', 'Hổ nằm ở đỉnh chuỗi thức ăn.'],
        ['Many birds migrate south to escape the cold winter.', 'Nhiều loài chim di cư về phía nam để tránh mùa đông lạnh.'],
        ['This species is threatened by habitat loss and illegal hunting.', 'Loài này bị đe dọa bởi mất môi trường sống và săn bắt trái phép.'],
        ['The embryo develops in several stages before hatching.', 'Phôi phát triển qua nhiều giai đoạn trước khi nở.'],
      ],
      dialogue: [
        ['Student', 'How do amphibians breathe?', 'Động vật lưỡng cư thở bằng cách nào?'],
        ['Lecturer', 'Young amphibians breathe through gills, but adults use lungs and their skin.', 'Lưỡng cư non thở bằng mang, nhưng con trưởng thành dùng phổi và da.'],
        ['Student', 'Is a frog cold-blooded?', 'Ếch là động vật máu lạnh phải không?'],
        ['Lecturer', 'Yes, its body temperature depends on the environment.', 'Đúng, nhiệt độ cơ thể của nó phụ thuộc vào môi trường.'],
        ['Student', 'And what is metamorphosis?', 'Còn biến thái là gì?'],
        ['Lecturer', 'It is the change from a larva, like a tadpole, to an adult.', 'Đó là sự thay đổi từ ấu trùng, như nòng nọc, thành con trưởng thành.'],
      ],
    },
    {
      id: 'thuc-vat-hoc', title: 'Thực vật học & CNSH thực vật', icon: '🌿', level: 'Nền tảng',
      desc: 'Cấu tạo cây, quang hợp, sinh sản và công nghệ nuôi cấy mô thực vật.',
      words: [
        ['botany', 'thực vật học', 'Botany is the scientific study of plants.', 'Thực vật học là ngành nghiên cứu khoa học về thực vật.'],
        ['root', 'rễ', 'The root absorbs water from the soil.', 'Rễ hút nước từ đất.'],
        ['stem', 'thân cây', 'The stem carries water to the leaves.', 'Thân cây đưa nước lên lá.'],
        ['leaf', 'lá', 'Each leaf contains chlorophyll.', 'Mỗi chiếc lá đều chứa diệp lục.'],
        ['flower', 'hoa', 'The flower attracts insects.', 'Hoa thu hút côn trùng.'],
        ['seed', 'hạt giống', 'A seed contains a tiny embryo.', 'Hạt giống chứa một phôi nhỏ.'],
        ['fruit', 'quả', 'The fruit protects the seeds.', 'Quả bảo vệ hạt.'],
        ['chlorophyll', 'diệp lục', 'Chlorophyll gives leaves their green color.', 'Diệp lục tạo màu xanh cho lá.'],
        ['stomata', 'khí khổng', 'Stomata open to let gases pass.', 'Khí khổng mở ra để khí đi qua.'],
        ['xylem', 'mạch gỗ', 'Xylem transports water upward.', 'Mạch gỗ vận chuyển nước lên trên.'],
        ['phloem', 'mạch rây', 'Phloem carries sugars from the leaves.', 'Mạch rây mang đường từ lá đi.'],
        ['transpiration', 'sự thoát hơi nước', 'Transpiration cools the plant.', 'Thoát hơi nước làm mát cây.'],
        ['germination', 'sự nảy mầm', 'Germination needs water and warmth.', 'Nảy mầm cần nước và hơi ấm.'],
        ['pollination', 'sự thụ phấn', 'Bees help with pollination.', 'Ong giúp thụ phấn.'],
        ['pollen', 'phấn hoa', 'Pollen is carried by wind and insects.', 'Phấn hoa được gió và côn trùng mang đi.'],
        ['ovary', 'bầu nhụy', 'The ovary develops into a fruit.', 'Bầu nhụy phát triển thành quả.'],
        ['petal', 'cánh hoa', 'Each petal is bright yellow.', 'Mỗi cánh hoa có màu vàng tươi.'],
        ['nectar', 'mật hoa', 'Bees collect nectar from flowers.', 'Ong thu thập mật từ hoa.'],
        ['photosynthesis', 'quang hợp', 'Photosynthesis produces oxygen.', 'Quang hợp tạo ra oxy.'],
        ['carbon dioxide', 'khí carbon dioxide', 'Plants absorb carbon dioxide from the air.', 'Cây hấp thụ carbon dioxide từ không khí.'],
        ['nutrient', 'chất dinh dưỡng', 'Plants need nutrients from the soil.', 'Cây cần chất dinh dưỡng từ đất.'],
        ['fertilizer', 'phân bón', 'Too much fertilizer can harm crops.', 'Quá nhiều phân bón có thể hại cây trồng.'],
        ['soil', 'đất', 'Healthy soil is rich in organic matter.', 'Đất khỏe giàu chất hữu cơ.'],
        ['crop', 'cây trồng', 'Rice is the main crop in Asia.', 'Lúa là cây trồng chính ở châu Á.'],
        ['cereal', 'ngũ cốc', 'Wheat is a major cereal.', 'Lúa mì là một loại ngũ cốc chính.'],
        ['legume', 'cây họ đậu', 'Legumes fix nitrogen in the soil.', 'Cây họ đậu cố định đạm trong đất.'],
        ['nitrogen fixation', 'cố định đạm', 'Nitrogen fixation helps plants grow.', 'Cố định đạm giúp cây sinh trưởng.'],
        ['weed', 'cỏ dại', 'Weeds compete with crops for light.', 'Cỏ dại cạnh tranh ánh sáng với cây trồng.'],
        ['pest', 'sâu bệnh, dịch hại', 'Farmers use traps to control pests.', 'Nông dân dùng bẫy để kiểm soát dịch hại.'],
        ['pesticide', 'thuốc trừ sâu', 'Pesticide residues must be tested.', 'Dư lượng thuốc trừ sâu phải được kiểm tra.'],
        ['drought tolerance', 'khả năng chịu hạn', 'Drought tolerance is a valuable trait.', 'Khả năng chịu hạn là một đặc tính quý.'],
        ['hybrid', 'giống lai', 'Hybrid rice gives a higher yield.', 'Lúa lai cho năng suất cao hơn.'],
        ['cultivar', 'giống cây trồng', 'This cultivar resists fungal disease.', 'Giống này kháng bệnh nấm.'],
        ['plant breeding', 'chọn tạo giống cây', 'Plant breeding improves crop quality.', 'Chọn tạo giống cải thiện chất lượng cây trồng.'],
        ['tissue culture', 'nuôi cấy mô', 'Tissue culture produces many identical plants.', 'Nuôi cấy mô tạo ra nhiều cây giống hệt nhau.'],
        ['explant', 'mẫu cấy', 'A small explant was placed on the medium.', 'Một mẫu cấy nhỏ được đặt lên môi trường.'],
        ['callus', 'mô sẹo', 'Callus forms on the cut surface.', 'Mô sẹo hình thành trên bề mặt cắt.'],
        ['regeneration', 'sự tái sinh', 'Shoot regeneration took four weeks.', 'Tái sinh chồi mất bốn tuần.'],
        ['plantlet', 'cây con', 'The plantlets were moved to soil.', 'Các cây con được chuyển sang đất.'],
        ['acclimatization', 'thuần dưỡng', 'Acclimatization prepares plantlets for outdoor life.', 'Thuần dưỡng chuẩn bị cho cây con sống ngoài trời.'],
        ['growth hormone', 'hormone sinh trưởng', 'Auxin is a plant growth hormone.', 'Auxin là một hormone sinh trưởng của thực vật.'],
        ['auxin', 'auxin', 'Auxin promotes root formation.', 'Auxin thúc đẩy hình thành rễ.'],
        ['cytokinin', 'cytokinin', 'Cytokinin stimulates shoot growth.', 'Cytokinin kích thích sinh trưởng chồi.'],
        ['Agrobacterium', 'vi khuẩn Agrobacterium', 'Agrobacterium can transfer DNA into plant cells.', 'Agrobacterium có thể chuyển DNA vào tế bào thực vật.'],
        ['transgenic plant', 'cây chuyển gen', 'A transgenic plant carries a foreign gene.', 'Cây chuyển gen mang một gen ngoại lai.'],
        ['herbicide resistance', 'kháng thuốc diệt cỏ', 'Herbicide resistance was added to the maize.', 'Tính kháng thuốc diệt cỏ được đưa vào cây ngô.'],
        ['biofortification', 'tăng cường dinh dưỡng sinh học', 'Biofortification raises the vitamin content of rice.', 'Tăng cường dinh dưỡng sinh học nâng hàm lượng vitamin trong gạo.'],
        ['photoperiod', 'chu kỳ chiếu sáng', 'The photoperiod controls when the plant flowers.', 'Chu kỳ chiếu sáng quyết định lúc cây ra hoa.'],
        ['vegetative', 'sinh dưỡng', 'The plant is in its vegetative stage.', 'Cây đang ở giai đoạn sinh dưỡng.'],
        ['greenhouse', 'nhà kính', 'The seedlings grow in a greenhouse.', 'Cây con được trồng trong nhà kính.'],
      ],
      patterns: [
        ['Water moves from the roots to the leaves through the xylem.', 'Nước di chuyển từ rễ lên lá qua mạch gỗ.'],
        ['Plants use sunlight to convert carbon dioxide and water into sugar.', 'Thực vật dùng ánh sáng mặt trời để biến carbon dioxide và nước thành đường.'],
        ['Tissue culture allows us to produce thousands of identical plantlets.', 'Nuôi cấy mô cho phép tạo ra hàng nghìn cây con giống hệt nhau.'],
        ['The callus was transferred to a medium containing cytokinin.', 'Mô sẹo được chuyển sang môi trường chứa cytokinin.'],
        ['The new cultivar shows strong resistance to drought and pests.', 'Giống mới thể hiện khả năng kháng hạn và sâu bệnh mạnh.'],
      ],
      dialogue: [
        ['A', 'How long does it take for the explant to form callus?', 'Mẫu cấy mất bao lâu để hình thành mô sẹo?'],
        ['B', 'About three weeks on this medium.', 'Khoảng ba tuần trên môi trường này.'],
        ['A', 'Which hormones did you add?', 'Bạn đã thêm hormone nào?'],
        ['B', 'A balance of auxin and cytokinin.', 'Một tỷ lệ cân bằng giữa auxin và cytokinin.'],
        ['A', 'When can we move the plantlets to soil?', 'Khi nào chúng ta chuyển cây con sang đất được?'],
        ['B', 'After roots appear and acclimatization is complete.', 'Sau khi rễ xuất hiện và quá trình thuần dưỡng hoàn tất.'],
      ],
    },
    {
      id: 'hoa-sinh', title: 'Hóa sinh', icon: '⚛️', level: 'Nền tảng',
      desc: 'Carbohydrate, lipid, chuyển hóa, năng lượng và các con đường sinh hóa.',
      words: [
        ['biochemistry', 'hóa sinh', 'Biochemistry explains life at the molecular level.', 'Hóa sinh giải thích sự sống ở mức phân tử.'],
        ['molecule', 'phân tử', 'A protein is a very large molecule.', 'Protein là một phân tử rất lớn.'],
        ['atom', 'nguyên tử', 'Each atom has a nucleus.', 'Mỗi nguyên tử có một hạt nhân.'],
        ['bond', 'liên kết hóa học', 'A covalent bond shares electrons.', 'Liên kết cộng hóa trị chia sẻ electron.'],
        ['carbohydrate', 'carbohydrate, tinh bột đường', 'Carbohydrates are the main source of energy.', 'Carbohydrate là nguồn năng lượng chính.'],
        ['monosaccharide', 'đường đơn', 'Glucose is a monosaccharide.', 'Glucose là một đường đơn.'],
        ['polysaccharide', 'đa đường', 'Starch is a polysaccharide.', 'Tinh bột là một đa đường.'],
        ['starch', 'tinh bột', 'Plants store energy as starch.', 'Thực vật dự trữ năng lượng dưới dạng tinh bột.'],
        ['cellulose', 'cellulose', 'Cellulose makes up plant cell walls.', 'Cellulose tạo nên thành tế bào thực vật.'],
        ['glycogen', 'glycogen', 'Glycogen is stored in the liver.', 'Glycogen được dự trữ ở gan.'],
        ['lipid', 'lipid, chất béo', 'Lipids store energy and form membranes.', 'Lipid dự trữ năng lượng và tạo màng.'],
        ['fatty acid', 'acid béo', 'A saturated fatty acid has no double bonds.', 'Acid béo bão hòa không có liên kết đôi.'],
        ['triglyceride', 'triglyceride', 'Triglycerides are the main form of fat.', 'Triglyceride là dạng chất béo chính.'],
        ['cholesterol', 'cholesterol', 'Cholesterol is part of cell membranes.', 'Cholesterol là một phần của màng tế bào.'],
        ['steroid', 'steroid', 'Some hormones are steroids.', 'Một số hormone là steroid.'],
        ['nucleic acid', 'acid nucleic', 'DNA and RNA are nucleic acids.', 'DNA và RNA là các acid nucleic.'],
        ['vitamin', 'vitamin', 'Vitamin C is soluble in water.', 'Vitamin C tan trong nước.'],
        ['mineral', 'khoáng chất', 'Bones need the mineral calcium.', 'Xương cần khoáng chất canxi.'],
        ['enzyme', 'enzyme', 'Every metabolic reaction needs an enzyme.', 'Mọi phản ứng chuyển hóa đều cần một enzyme.'],
        ['metabolic pathway', 'con đường chuyển hóa', 'Each metabolic pathway has many steps.', 'Mỗi con đường chuyển hóa có nhiều bước.'],
        ['anabolism', 'đồng hóa', 'Anabolism builds large molecules.', 'Đồng hóa xây dựng các phân tử lớn.'],
        ['catabolism', 'dị hóa', 'Catabolism releases energy.', 'Dị hóa giải phóng năng lượng.'],
        ['oxidation', 'sự oxy hóa', 'Oxidation removes electrons from a molecule.', 'Oxy hóa lấy electron khỏi một phân tử.'],
        ['reduction', 'sự khử', 'Reduction adds electrons.', 'Sự khử thêm electron.'],
        ['redox reaction', 'phản ứng oxy hóa khử', 'A redox reaction transfers electrons.', 'Phản ứng oxy hóa khử chuyển electron.'],
        ['NADH', 'NADH', 'NADH carries electrons to the respiratory chain.', 'NADH mang electron đến chuỗi hô hấp.'],
        ['Krebs cycle', 'chu trình Krebs', 'The Krebs cycle takes place in the mitochondria.', 'Chu trình Krebs diễn ra trong ty thể.'],
        ['electron transport chain', 'chuỗi truyền electron', 'The electron transport chain produces most ATP.', 'Chuỗi truyền electron tạo ra phần lớn ATP.'],
        ['ATP synthase', 'ATP synthase', 'ATP synthase makes ATP from ADP.', 'ATP synthase tạo ATP từ ADP.'],
        ['fermentation', 'lên men', 'Fermentation occurs without oxygen.', 'Lên men xảy ra khi không có oxy.'],
        ['gluconeogenesis', 'tân tạo glucose', 'Gluconeogenesis makes glucose from other molecules.', 'Tân tạo glucose tạo glucose từ các phân tử khác.'],
        ['insulin', 'insulin', 'Insulin lowers the blood sugar level.', 'Insulin làm giảm đường huyết.'],
        ['hormone', 'hormone', 'A hormone acts as a chemical messenger.', 'Hormone hoạt động như một chất truyền tin hóa học.'],
        ['pH', 'độ pH', 'Blood has a pH of about 7.4.', 'Máu có pH khoảng 7,4.'],
        ['acid', 'acid', 'Stomach acid helps digest food.', 'Acid dạ dày giúp tiêu hóa thức ăn.'],
        ['base', 'bazơ', 'A base has a pH above 7.', 'Bazơ có pH trên 7.'],
        ['buffer system', 'hệ đệm', 'The blood has a buffer system.', 'Máu có một hệ đệm.'],
        ['solvent', 'dung môi', 'Water is the universal solvent.', 'Nước là dung môi phổ biến.'],
        ['solute', 'chất tan', 'Salt is a solute in seawater.', 'Muối là chất tan trong nước biển.'],
        ['ion', 'ion', 'A sodium ion carries a positive charge.', 'Ion natri mang điện tích dương.'],
        ['electrolyte', 'chất điện giải', 'Sweat contains electrolytes.', 'Mồ hôi chứa chất điện giải.'],
        ['hydrogen bond', 'liên kết hydro', 'Hydrogen bonds hold the DNA strands together.', 'Liên kết hydro giữ hai mạch DNA lại với nhau.'],
        ['covalent bond', 'liên kết cộng hóa trị', 'A covalent bond is very strong.', 'Liên kết cộng hóa trị rất bền.'],
        ['isomer', 'đồng phân', 'Glucose and fructose are isomers.', 'Glucose và fructose là đồng phân.'],
        ['functional group', 'nhóm chức', 'An amino group is a functional group.', 'Nhóm amino là một nhóm chức.'],
        ['polymer', 'polymer, cao phân tử', 'A protein is a polymer of amino acids.', 'Protein là polymer của các amino acid.'],
        ['monomer', 'monomer, đơn phân', 'Each monomer joins the chain by a bond.', 'Mỗi đơn phân gia nhập chuỗi bằng một liên kết.'],
        ['substrate-level', 'ở mức cơ chất', 'ATP is made by substrate-level phosphorylation.', 'ATP được tạo bằng phosphoryl hóa ở mức cơ chất.'],
        ['homeostasis', 'cân bằng nội môi', 'Hormones help maintain homeostasis.', 'Hormone giúp duy trì cân bằng nội môi.'],
        ['amino group', 'nhóm amino', 'An amino group contains nitrogen.', 'Nhóm amino chứa nitơ.'],
      ],
      patterns: [
        ['Enzymes catalyze almost every reaction in the cell.', 'Enzyme xúc tác hầu như mọi phản ứng trong tế bào.'],
        ['Glucose is broken down to release energy in the form of ATP.', 'Glucose bị phân giải để giải phóng năng lượng dưới dạng ATP.'],
        ['Anabolic reactions build molecules, while catabolic reactions break them down.', 'Phản ứng đồng hóa xây dựng phân tử, còn phản ứng dị hóa thì phân giải chúng.'],
        ['The pH of the solution was adjusted to 7.4 with a buffer.', 'pH của dung dịch được điều chỉnh về 7,4 bằng dung dịch đệm.'],
        ['Lipids are insoluble in water but dissolve in organic solvents.', 'Lipid không tan trong nước nhưng tan trong dung môi hữu cơ.'],
      ],
      dialogue: [
        ['Student', 'Where does the Krebs cycle take place?', 'Chu trình Krebs diễn ra ở đâu?'],
        ['Lecturer', 'In the matrix of the mitochondria.', 'Trong chất nền của ty thể.'],
        ['Student', 'What does it produce?', 'Nó tạo ra gì?'],
        ['Lecturer', 'Mainly NADH, which carries electrons to the electron transport chain.', 'Chủ yếu là NADH, chất mang electron đến chuỗi truyền electron.'],
        ['Student', 'And where does most ATP come from?', 'Vậy phần lớn ATP đến từ đâu?'],
        ['Lecturer', 'From the electron transport chain and ATP synthase.', 'Từ chuỗi truyền electron và ATP synthase.'],
      ],
    },
    {
      id: 'tin-sinh-hoc', title: 'Tin sinh học', icon: '💻', level: 'Nâng cao',
      desc: 'Cơ sở dữ liệu, gióng hàng trình tự, giải trình tự thế hệ mới và phân tích dữ liệu.',
      words: [
        ['bioinformatics', 'tin sinh học', 'Bioinformatics combines biology and computer science.', 'Tin sinh học kết hợp sinh học và khoa học máy tính.'],
        ['database', 'cơ sở dữ liệu', 'The sequence was stored in a public database.', 'Trình tự được lưu trong cơ sở dữ liệu công khai.'],
        ['algorithm', 'thuật toán', 'This algorithm aligns two sequences.', 'Thuật toán này gióng hàng hai trình tự.'],
        ['software', 'phần mềm', 'We used free software for the analysis.', 'Chúng tôi dùng phần mềm miễn phí để phân tích.'],
        ['pipeline', 'quy trình phân tích', 'The pipeline has five steps.', 'Quy trình phân tích gồm năm bước.'],
        ['sequence', 'trình tự', 'The DNA sequence is 1,500 bases long.', 'Trình tự DNA dài 1.500 base.'],
        ['read', 'đoạn đọc (giải trình tự)', 'Each read is about 150 bases long.', 'Mỗi đoạn đọc dài khoảng 150 base.'],
        ['coverage', 'độ phủ', 'The average coverage was 30 times.', 'Độ phủ trung bình là 30 lần.'],
        ['assembly', 'sự lắp ráp (genome)', 'Genome assembly joins short reads together.', 'Lắp ráp bộ gen ghép các đoạn đọc ngắn lại.'],
        ['contig', 'contig', 'The assembly produced 120 contigs.', 'Quá trình lắp ráp tạo ra 120 contig.'],
        ['scaffold', 'scaffold', 'Contigs are ordered into scaffolds.', 'Các contig được sắp xếp thành scaffold.'],
        ['annotation', 'chú giải gen', 'Annotation identifies genes in the genome.', 'Chú giải gen xác định các gen trong bộ gen.'],
        ['alignment', 'sự gióng hàng', 'Sequence alignment reveals similar regions.', 'Gióng hàng trình tự cho thấy các vùng tương đồng.'],
        ['BLAST', 'công cụ BLAST', 'We used BLAST to search the database.', 'Chúng tôi dùng BLAST để tìm trong cơ sở dữ liệu.'],
        ['query', 'chuỗi truy vấn', 'The query sequence matched a known gene.', 'Chuỗi truy vấn khớp với một gen đã biết.'],
        ['match', 'sự khớp', 'The best match had 98% identity.', 'Kết quả khớp tốt nhất có độ đồng nhất 98%.'],
        ['identity', 'độ đồng nhất', 'The two proteins share 85% identity.', 'Hai protein có độ đồng nhất 85%.'],
        ['similarity', 'độ tương đồng', 'Similarity suggests a common ancestor.', 'Độ tương đồng gợi ý tổ tiên chung.'],
        ['gap', 'khoảng trống (gióng hàng)', 'A gap was added to improve the alignment.', 'Một khoảng trống được thêm để cải thiện gióng hàng.'],
        ['e-value', 'giá trị e', 'A low e-value means a significant match.', 'Giá trị e thấp nghĩa là kết quả khớp có ý nghĩa.'],
        ['phylogenetic tree', 'cây phát sinh loài', 'We built a phylogenetic tree of the strains.', 'Chúng tôi dựng cây phát sinh loài của các chủng.'],
        ['phylogeny', 'phát sinh loài', 'Phylogeny describes evolutionary relationships.', 'Phát sinh loài mô tả quan hệ tiến hóa.'],
        ['clade', 'nhánh (cây phát sinh)', 'These strains form a single clade.', 'Các chủng này tạo thành một nhánh.'],
        ['bootstrap', 'kiểm định bootstrap', 'Bootstrap values above 70 are reliable.', 'Giá trị bootstrap trên 70 là đáng tin.'],
        ['ortholog', 'gen tương đồng nguồn gốc (ortholog)', 'This gene is an ortholog of the human one.', 'Gen này là ortholog của gen người.'],
        ['homolog', 'gen đồng nguyên', 'We found a homolog in yeast.', 'Chúng tôi tìm thấy một gen đồng nguyên ở nấm men.'],
        ['motif', 'mô-típ', 'A conserved motif was detected.', 'Một mô-típ bảo tồn đã được phát hiện.'],
        ['domain', 'vùng chức năng (protein)', 'The protein has a kinase domain.', 'Protein có một vùng kinase.'],
        ['conserved', 'được bảo tồn', 'This region is highly conserved.', 'Vùng này được bảo tồn rất cao.'],
        ['variant', 'biến thể', 'We called variants from the reads.', 'Chúng tôi gọi các biến thể từ đoạn đọc.'],
        ['SNP', 'đa hình đơn nucleotide', 'A single SNP changes one base.', 'Một SNP thay đổi một base.'],
        ['genotyping', 'xác định kiểu gen', 'Genotyping was done for 200 samples.', 'Xác định kiểu gen được thực hiện cho 200 mẫu.'],
        ['transcriptome', 'bộ phiên mã', 'The transcriptome shows all active genes.', 'Bộ phiên mã cho thấy tất cả gen đang hoạt động.'],
        ['RNA-seq', 'giải trình tự RNA', 'RNA-seq measures gene expression.', 'RNA-seq đo biểu hiện gen.'],
        ['differential expression', 'biểu hiện khác biệt', 'Differential expression was analyzed between groups.', 'Biểu hiện khác biệt được phân tích giữa các nhóm.'],
        ['proteomics', 'proteome học', 'Proteomics studies all proteins in a sample.', 'Proteome học nghiên cứu mọi protein trong mẫu.'],
        ['metabolomics', 'chuyển hóa học', 'Metabolomics measures small molecules.', 'Chuyển hóa học đo các phân tử nhỏ.'],
        ['metagenomics', 'metagenome học', 'Metagenomics studies microbes in the soil.', 'Metagenome học nghiên cứu vi sinh vật trong đất.'],
        ['genomics', 'hệ gen học', 'Genomics studies entire genomes.', 'Hệ gen học nghiên cứu toàn bộ bộ gen.'],
        ['reference genome', 'bộ gen tham chiếu', 'Reads were mapped to the reference genome.', 'Các đoạn đọc được ánh xạ lên bộ gen tham chiếu.'],
        ['mapping', 'ánh xạ', 'Mapping took two hours.', 'Ánh xạ mất hai giờ.'],
        ['quality score', 'điểm chất lượng', 'Reads with a low quality score were removed.', 'Các đoạn đọc có điểm chất lượng thấp bị loại bỏ.'],
        ['trimming', 'cắt bỏ (đoạn kém chất lượng)', 'Trimming removed the adapters.', 'Cắt bỏ loại đi các đoạn adapter.'],
        ['file format', 'định dạng tệp', 'FASTA is a common file format.', 'FASTA là một định dạng tệp phổ biến.'],
        ['script', 'đoạn mã tự động', 'I wrote a script to rename the files.', 'Tôi viết đoạn mã để đổi tên các tệp.'],
        ['command line', 'dòng lệnh', 'Most tools run from the command line.', 'Hầu hết công cụ chạy từ dòng lệnh.'],
        ['open source', 'mã nguồn mở', 'The tool is open source and free.', 'Công cụ này có mã nguồn mở và miễn phí.'],
        ['visualization', 'trực quan hóa', 'Visualization helps explain the results.', 'Trực quan hóa giúp giải thích kết quả.'],
        ['heat map', 'bản đồ nhiệt', 'The heat map shows gene expression levels.', 'Bản đồ nhiệt cho thấy mức biểu hiện gen.'],
        ['machine learning', 'học máy', 'Machine learning predicts protein function.', 'Học máy dự đoán chức năng protein.'],
      ],
      patterns: [
        ['The raw reads were trimmed and mapped to the reference genome.', 'Các đoạn đọc thô được cắt bỏ và ánh xạ lên bộ gen tham chiếu.'],
        ['The query sequence showed 98 percent identity with the database entry.', 'Chuỗi truy vấn có độ đồng nhất 98 phần trăm với mục trong cơ sở dữ liệu.'],
        ['A phylogenetic tree was constructed using the neighbor-joining method.', 'Một cây phát sinh loài được dựng bằng phương pháp neighbor-joining.'],
        ['Genes with a significant change in expression were identified.', 'Các gen có biểu hiện thay đổi có ý nghĩa đã được xác định.'],
        ['The software is open source and runs from the command line.', 'Phần mềm này có mã nguồn mở và chạy từ dòng lệnh.'],
      ],
      dialogue: [
        ['A', 'Did the genome assembly finish?', 'Quá trình lắp ráp bộ gen đã xong chưa?'],
        ['B', 'Yes. We got 120 contigs with an average coverage of 50 times.', 'Rồi. Chúng tôi có 120 contig với độ phủ trung bình 50 lần.'],
        ['A', 'Have you annotated the genes?', 'Bạn đã chú giải gen chưa?'],
        ['B', 'Not yet. I am running the pipeline now.', 'Chưa. Tôi đang chạy quy trình phân tích.'],
        ['A', 'Please compare the results with the reference genome.', 'Hãy so sánh kết quả với bộ gen tham chiếu.'],
        ['B', 'I will use BLAST and send you the alignment tonight.', 'Tôi sẽ dùng BLAST và gửi bạn kết quả gióng hàng tối nay.'],
      ],
    },
  ],
  reads: {
    'dong-vat-hoc': {
      title: 'Why Animals Migrate',
      text: 'Every year, millions of animals travel long distances in a journey called migration. Birds, whales, butterflies and fish all migrate, but the reasons are similar: food, safety and reproduction. Many birds fly south before winter because insects disappear in cold weather. Humpback whales swim thousands of kilometers to warm waters, where females give birth to their offspring. Scientists still study how migrating animals find their way. Some species use the position of the sun and stars, while others sense the Earth\'s magnetic field. Migration is dangerous, and habitat loss makes it harder. For this reason, conservation programs protect the routes that animals follow.',
      vi: 'Động vật di cư để tìm thức ăn, nơi an toàn và nơi sinh sản; chúng định hướng bằng mặt trời, sao hoặc từ trường và cần được bảo tồn tuyến đường.',
      qs: [
        ['Why do many birds fly south before winter?', ['They like warm water.', 'Insects disappear in cold weather.', 'They are looking for mates.', 'They lose their feathers.'], 1],
        ['Where do female humpback whales give birth?', ['In cold seas', 'In rivers', 'In warm waters', 'On land'], 2],
        ['How do some species find their way?', ['By smell only', 'By using the sun, stars or magnetic field', 'By following humans', 'By luck'], 1],
      ],
    },
    'thuc-vat-hoc': {
      title: 'Cloning Plants in a Laboratory',
      text: 'Plant tissue culture is a method for growing many identical plants from a small piece of tissue. First, a small explant is taken from a healthy plant and cleaned to remove microorganisms. The explant is then placed on a sterile medium containing nutrients and growth hormones. Under the right balance of auxin and cytokinin, the explant forms a mass of cells called callus. When the callus is moved to a new medium, shoots and roots begin to develop. After several weeks, the small plantlets are transferred to soil and slowly adapted to outdoor conditions. This technique is widely used for bananas, orchids and potatoes because it produces healthy plants quickly.',
      vi: 'Nuôi cấy mô thực vật tạo nhiều cây giống hệt nhau từ mẫu nhỏ qua các bước: lấy mẫu, tạo mô sẹo nhờ auxin và cytokinin, tái sinh chồi rễ rồi thuần dưỡng.',
      qs: [
        ['What is an explant?', ['A type of soil', 'A small piece of plant tissue', 'A growth hormone', 'A disease'], 1],
        ['What forms under the right balance of auxin and cytokinin?', ['Callus', 'Seeds', 'Fruit', 'Flowers'], 0],
        ['Why is this technique popular?', ['It is slow.', 'It produces healthy plants quickly.', 'It needs no laboratory.', 'It kills pests.'], 1],
      ],
    },
    'hoa-sinh': {
      title: 'How Cells Make Energy',
      text: 'Cells need a constant supply of energy to stay alive. The main energy molecule is ATP. To make ATP, cells break down glucose in several stages. The first stage, glycolysis, takes place in the cytoplasm and produces a small amount of ATP. The products then enter the mitochondria, where the Krebs cycle releases electrons. These electrons are carried by NADH to the electron transport chain, where most ATP is produced. Oxygen is the final acceptor of the electrons and combines with hydrogen to form water. When oxygen is not available, many cells use fermentation instead, but this process produces far less ATP.',
      vi: 'Tế bào tạo ATP bằng cách phân giải glucose qua đường phân, chu trình Krebs và chuỗi truyền electron; khi thiếu oxy thì lên men tạo ít ATP hơn.',
      qs: [
        ['Where does glycolysis take place?', ['In the nucleus', 'In the cytoplasm', 'In the mitochondria', 'In the cell wall'], 1],
        ['What carries electrons to the electron transport chain?', ['Glucose', 'Oxygen', 'NADH', 'Water'], 2],
        ['What happens when oxygen is not available?', ['Cells make more ATP.', 'Cells use fermentation.', 'Cells stop dividing at once.', 'Cells make oxygen.'], 1],
      ],
    },
    'tin-sinh-hoc': {
      title: 'A Typical Sequencing Project',
      text: 'A modern sequencing project begins in the laboratory but ends on a computer. After DNA is extracted and sequenced, the machine produces millions of short reads. The first task of a bioinformatician is to check their quality and trim low-quality ends. Next, the reads are either mapped to a reference genome or assembled into longer sequences called contigs. Annotation software then predicts where genes are and what they might do. To understand function, researchers compare the sequences with public databases using tools such as BLAST. Finally, results are visualized with heat maps or phylogenetic trees. Because the files are huge, most analyses run on powerful servers through the command line.',
      vi: 'Một dự án giải trình tự đi từ đoạn đọc thô, kiểm tra chất lượng, ánh xạ hoặc lắp ráp, chú giải, so sánh với cơ sở dữ liệu rồi trực quan hóa trên máy chủ mạnh.',
      qs: [
        ['What is the first task of the bioinformatician?', ['Visualize the results', 'Check the quality and trim the reads', 'Extract the DNA', 'Build a tree'], 1],
        ['What are contigs?', ['Public databases', 'Longer sequences assembled from reads', 'Types of heat maps', 'Reference genomes'], 1],
        ['Why do analyses run on powerful servers?', ['The files are huge.', 'It is cheaper.', 'BLAST requires it.', 'Trees are slow to draw.'], 0],
      ],
    },
  },
  defs: `
biodiversity = the variety of living things in an area
zoology = the scientific study of animals
species = a group of living things that can produce young together
genus = a group of closely related species
taxonomy = the science of naming and grouping living things
vertebrate = an animal that has a backbone
invertebrate = an animal that has no backbone
mammal = a warm-blooded animal that feeds its young with milk
reptile = a cold-blooded animal with dry scaly skin
amphibian = an animal that lives both in water and on land
insect = a small animal with six legs and a body in three parts
predator = an animal that hunts and eats other animals
prey = an animal that is hunted by another animal
herbivore = an animal that eats only plants
carnivore = an animal that eats meat
omnivore = an animal that eats both plants and meat
food chain = a series of living things that depend on each other for food
migration = movement of animals from one region to another
hibernation = a long deep sleep that some animals have in winter
metamorphosis = a change of form from young to adult, like a caterpillar to a butterfly
larva = the young form of an insect before it becomes an adult
skeleton = the frame of bones that supports the body
muscle = tissue that contracts to make the body move
nervous system = the network of nerves that sends messages around the body
circulatory system = the system that moves blood around the body
respiratory system = the organs used for breathing
digestive system = the organs that break down food
organ system = a group of organs that work together
gill = the part of a fish used for breathing underwater
lung = an organ used for breathing air
warm-blooded = having a body temperature that stays the same
cold-blooded = having a body temperature that changes with the environment
reproduction = the process of producing young
fertilization = the joining of a male and a female cell
embryo = an animal in its earliest stage of development
gestation = the period when a baby develops inside its mother
offspring = the young of a person or animal
lifespan = the length of time a living thing lives
behavior = the way an animal acts
instinct = a natural way of behaving that is not learned
camouflage = coloring that helps an animal hide in its surroundings
adaptation = a change that helps a living thing survive in its environment
natural selection = the process by which the best adapted living things survive
evolution = the slow change of living things over many generations
endangered species = a kind of animal at risk of becoming extinct
conservation = protecting nature and wildlife
model organism = a species studied to learn about biology in general
livestock = animals kept on a farm for food or work
veterinary = relating to the medical care of animals
aquaculture = the farming of fish and other water animals
photoperiod = the length of daily light that a plant receives
vegetative = relating to growth of leaves and stems, not flowers
greenhouse = a glass building for growing plants
botany = the scientific study of plants
root = the part of a plant that grows underground
stem = the main part of a plant that holds up the leaves
leaf = a flat green part of a plant that grows from the stem
flower = the part of a plant that makes seeds
seed = a small hard part of a plant from which a new plant grows
fruit = the part of a plant that contains seeds
chlorophyll = the green substance in plants that uses sunlight
stomata = tiny holes in leaves that let gases in and out
xylem = tissue that carries water up through a plant
phloem = tissue that carries sugars through a plant
transpiration = the loss of water vapor from a plant's leaves
germination = the start of growth of a seed
pollination = the transfer of pollen from one flower to another
pollen = a fine powder made by flowers that is needed for seeds
ovary = the part of a flower that contains the eggs
petal = one of the colored parts of a flower
nectar = a sweet liquid produced by flowers
photosynthesis = the process by which plants make food using light
carbon dioxide = a gas that plants take in and animals breathe out
nutrient = a substance that living things need to grow
fertilizer = a substance added to soil to help plants grow
soil = the top layer of earth in which plants grow
crop = a plant grown by farmers for food
cereal = a grass plant grown for its grain
legume = a plant with seeds in pods, such as peas and beans
nitrogen fixation = the process of turning nitrogen from the air into a form plants can use
weed = a wild plant growing where it is not wanted
pest = an insect or animal that damages crops
pesticide = a chemical used to kill pests
drought tolerance = the ability of a plant to survive with little water
hybrid = a plant produced by crossing two different varieties
cultivar = a variety of plant produced by selective breeding
plant breeding = the science of improving plants by selecting and crossing them
tissue culture = growing plant cells in a laboratory on a nutrient medium
explant = a small piece of plant tissue used to start a culture
callus = a mass of undifferentiated plant cells
regeneration = the growth of new tissue or parts
plantlet = a very small young plant
acclimatization = getting used to new conditions gradually
growth hormone = a chemical that controls how a plant grows
auxin = a plant hormone that controls growth and root formation
cytokinin = a plant hormone that promotes cell division
Agrobacterium = a soil bacterium used to put genes into plants
transgenic plant = a plant containing a gene from another species
herbicide resistance = the ability of a plant to survive weed-killing chemicals
biofortification = increasing the nutrients in crops by breeding or genetic methods
amino group = a group of atoms containing nitrogen found in amino acids
biochemistry = the study of the chemical processes in living things
molecule = a group of atoms joined together
atom = the smallest unit of a chemical element
bond = a connection between atoms in a molecule
carbohydrate = a substance such as sugar or starch that gives energy
monosaccharide = a simple sugar with one unit
polysaccharide = a carbohydrate made of many sugar units
starch = a carbohydrate stored by plants
cellulose = a carbohydrate that forms the walls of plant cells
glycogen = a carbohydrate stored in animal liver and muscle
lipid = a fat or oil-like substance in living things
fatty acid = a building block of fats
triglyceride = the main type of fat stored in the body
cholesterol = a fatty substance found in animal cells and blood
steroid = a type of lipid, such as many hormones
nucleic acid = a large molecule like DNA that carries genetic information
vitamin = a substance the body needs in small amounts to stay healthy
mineral = a natural substance the body needs, such as calcium
enzyme = a protein that speeds up a chemical reaction
metabolic pathway = a series of chemical reactions in a cell
anabolism = the process of building large molecules from small ones
catabolism = the process of breaking down large molecules
oxidation = a reaction in which a substance loses electrons
reduction = a reaction in which a substance gains electrons
redox reaction = a reaction in which electrons move from one substance to another
NADH = a molecule that carries electrons in cells
Krebs cycle = a series of reactions in mitochondria that releases energy
electron transport chain = a series of proteins that pass electrons and make ATP
ATP synthase = an enzyme that makes ATP
fermentation = obtaining energy from sugar without using oxygen
gluconeogenesis = making glucose from non-sugar substances
insulin = a hormone that lowers the sugar level in the blood
hormone = a chemical made by the body that controls a function
pH = a number that shows how acid or basic something is
acid = a substance with a pH lower than 7
base = a substance with a pH higher than 7
buffer system = a mixture that keeps the pH from changing
solvent = a liquid in which other substances dissolve
solute = a substance that is dissolved in a liquid
ion = an atom or molecule with an electric charge
electrolyte = a substance with ions that conducts electricity in water
hydrogen bond = a weak link between hydrogen and another atom
covalent bond = a strong bond in which atoms share electrons
isomer = a molecule with the same atoms in a different arrangement
functional group = a group of atoms that gives a molecule its typical reactions
polymer = a large molecule made of many repeating units
monomer = a small molecule that can join with others to form a polymer
substrate-level = describing ATP made directly from a reaction, not by a chain
homeostasis = the way the body keeps conditions inside it steady
bioinformatics = the use of computers to study biological data
database = a large collection of organized data stored on a computer
algorithm = a set of rules a computer follows to solve a problem
software = programs that run on a computer
pipeline = a series of analysis steps run one after another
sequence = the order of bases in DNA or amino acids in a protein
read = a short piece of sequence produced by a sequencing machine
coverage = the average number of times each base is sequenced
assembly = putting short sequences together to rebuild a genome
contig = a continuous piece of DNA made by joining overlapping reads
scaffold = a group of contigs put in order
annotation = adding information about genes to a sequence
alignment = lining up sequences to compare them
BLAST = a tool for searching for similar sequences in a database
query = a sequence you use to search a database
match = a sequence in a database that is similar to your query
identity = the percentage of positions that are exactly the same
similarity = how alike two sequences are
gap = a space inserted in an alignment
e-value = a number showing how likely a match happened by chance
phylogenetic tree = a diagram showing how species are related
phylogeny = the history of how species developed and are related
clade = a group of organisms that share a common ancestor
bootstrap = a method that tests how reliable a tree is
ortholog = a gene in another species that came from the same ancestor gene
homolog = a gene that is similar because of shared ancestry
motif = a short pattern in a sequence that has a function
domain = a part of a protein with a particular shape and function
conserved = unchanged through evolution
variant = a form of a gene or sequence that differs from others
SNP = a change in a single base at one position in DNA
genotyping = finding the genetic variants of a person or organism
transcriptome = all the RNA made by a cell
RNA-seq = a method that sequences RNA to measure gene activity
differential expression = a difference in gene activity between two conditions
proteomics = the study of all the proteins in a cell
metabolomics = the study of all the small molecules in a cell
metagenomics = the study of the DNA of all microbes in a sample
genomics = the study of whole genomes
reference genome = a complete genome used as a standard for comparison
mapping = finding where a read fits in a genome
quality score = a number showing how reliable a sequenced base is
trimming = removing low-quality parts of a read
file format = the way data is organized in a computer file
script = a short computer program that automates a task
command line = a way of giving instructions to a computer by typing
open source = software that anyone can use and change for free
visualization = showing data as pictures or graphs
heat map = a graph that uses colors to show values
machine learning = computer methods that learn patterns from data
`,
};
