import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Publications — Kentaro Hiromitsu, Ph.D.",
  description:
    "Peer-reviewed articles, preprints, books and selected academic presentations by Kentaro Hiromitsu.",
};

type RecordItem = {
  year: string;
  authors: string;
  title: string;
  venue: string;
  href?: string;
  linkLabel?: string;
  note?: string;
};

type ActivityItem = {
  year: string;
  citation: string;
  note?: string;
  group?: string;
};

const peerReviewedArticles: RecordItem[] = [
  {
    year: "2022",
    authors: "弘光健太郎．",
    title: "意識状態の変容と脳内ネットワーク",
    venue: "鶴見大学仏教文化研究所紀要，27，53–66．",
    href:
      "https://buddhism.lib.ntu.edu.tw/en/search/search_detail.jsp?seq=674604&comefrom=authorinfo",
    linkLabel: "Link",
  },
  {
    year: "2022",
    authors:
      "Ochi, R., Saito, S., Hiromitsu, K., Shigemune, Y., Shinoura, N., Yamada, R., & Midorikawa, A.",
    title: "Sensory hypo- and hypersensitivity in patients with brain tumors",
    venue: "Brain Injury, 36(8), 1053–1058.",
    href: "https://doi.org/10.1080/02699052.2022.2110943",
  },
  {
    year: "2021",
    authors: "Tanaka, M., Nakashima, R., Hiromitsu, K., & Imamizu, H.",
    title:
      "Individual Differences in the Change of Attentional Functions With Brief One-Time Focused Attention and Open Monitoring Meditations",
    venue: "Frontiers in Psychology, 12, 716138.",
    href: "https://doi.org/10.3389/fpsyg.2021.716138",
  },
  {
    year: "2021",
    authors:
      "Shigemune, Y., Saito, S., Hiromitsu, K., Hamamoto, K., Ochi, R., Shinoura, N., Yamada, R., & Midorikawa, A.",
    title:
      "Depression and time perspectives in patients with brain tumors: Novel measurements in the circle test",
    venue: "Journal of Affective Disorders Reports, 4, 100084.",
    href: "https://doi.org/10.1016/j.jadr.2021.100084",
  },
  {
    year: "2020",
    authors: "Hiromitsu, K., Shinoura, N., Yamada, R., & Midorikawa, A.",
    title:
      "Dissociation of the subjective and objective bodies: Out-of-body experiences following the development of a posterior cingulate lesion",
    venue: "Journal of Neuropsychology, 14(1), 183–192.",
    href: "https://doi.org/10.1111/jnp.12199",
  },
  {
    year: "2019",
    authors:
      "Midorikawa, A., Saito, S., Itoi, C., Ochi, R., Hiromitsu, K., Yamada, R., & Shinoura, N.",
    title:
      "Biased Recognition of Surprised Facial Expressions Following Awake Craniotomy of a Right Temporal Lobe Tumor",
    venue: "Frontiers in Psychology, 10, 1908.",
    href: "https://doi.org/10.3389/fpsyg.2019.01908",
  },
  {
    year: "2019",
    authors:
      "Shinoura, N., Midorikawa, A., Hiromitsu, K., Saito, S., & Yamada, R.",
    title:
      "Preservation of cranial nerve function following awake surgery for benign brain tumors in 22 consecutive patients",
    venue: "Journal of Clinical Neuroscience, 61, 189–195.",
    href: "https://doi.org/10.1016/j.jocn.2018.10.037",
  },
  {
    year: "2019",
    authors: "田中彰吾，浅井智久，金山範明，今泉修，弘光健太郎．",
    title: "心身脳問題—からだを巡る冒険—",
    venue: "心理学研究，90(5)，520–539．",
    href: "https://doi.org/10.4992/jjpsy.90.18403",
  },
  {
    year: "2018",
    authors:
      "Hiromitsu, K., Asai, T., Saito, S., Shigemune, Y., Hamamoto, K., Shinoura, N., Yamada, R., & Midorikawa, A.",
    title:
      "Measuring the sense of self in brain-damaged patients: A STROBE-compliant article",
    venue: "Medicine, 97(36), e12156.",
    href: "https://doi.org/10.1097/MD.0000000000012156",
  },
  {
    year: "2018",
    authors: "Imaizumi, S., Asai, T., Hiromitsu, K., & Imamizu, H.",
    title:
      "Voluntarily controlled but not merely observed visual feedback affects postural sway",
    venue: "PeerJ, 6, e4643.",
    href: "https://doi.org/10.7717/peerj.4643",
  },
  {
    year: "2017",
    authors:
      "Shinoura, N., Midorikawa, A., Hiromitsu, K., Saito, S., & Yamada, R.",
    title:
      "Preservation of hearing following awake surgery via the retrosigmoid approach for vestibular schwannomas in eight consecutive patients",
    venue: "Acta Neurochirurgica, 159(9), 1579–1585.",
    href: "https://doi.org/10.1007/s00701-017-3235-8",
  },
  {
    year: "2017",
    authors:
      "Shinoura, N., Midorikawa, A., Yamada, R., Hiromitsu, K., Itoi, C., Saito, S., & Yagi, K.",
    title:
      "Operative Strategies during Awake Surgery Affect Deterioration of Paresis a Month after Surgery for Brain Lesions in the Primary Motor Area",
    venue:
      "Journal of Neurological Surgery Part A: Central European Neurosurgery, 78(4), 368–373.",
    href: "https://doi.org/10.1055/s-0036-1586252",
  },
  {
    year: "2016",
    authors: "Hiromitsu, K., & Midorikawa, A.",
    title:
      "Downward and Parallel Perspectives in an Experimental Study of Out-of-Body Experiences",
    venue: "Multisensory Research, 29(4–5), 439–451.",
    href: "https://doi.org/10.1163/22134808-00002523",
  },
  {
    year: "2016",
    authors: "Midorikawa, A., Suzuki, H., Hiromitsu, K., & Kawamura, M.",
    title:
      "Wandering behavior of a severely demented patient with frontotemporal dementia",
    venue: "Neurocase, 22(2), 220–224.",
    href: "https://doi.org/10.1080/13554794.2015.1120313",
  },
  {
    year: "2016",
    authors: "弘光健太郎，緑川晶．",
    title:
      "経頭蓋直流電流刺激（tDCS）によって認められた音韻性流暢性と意味性流暢性との解離",
    venue: "中央大学人文研紀要，83，145–157．",
    href: "https://chuo-u.repo.nii.ac.jp/records/8229",
    linkLabel: "Link",
  },
  {
    year: "2015",
    authors:
      "Itoi, C., Hiromitsu, K., Saito, S., Yamada, R., Shinoura, N., & Midorikawa, A.",
    title: "Predicting sleepiness during an awake craniotomy",
    venue: "Clinical Neurology and Neurosurgery, 139, 307–310.",
    href: "https://doi.org/10.1016/j.clineuro.2015.10.033",
  },
  {
    year: "2013",
    authors:
      "Shinoura, N., Midorikawa, A., Yamada, R., Hana, T., Saito, A., Hiromitsu, K., Itoi, C., Saito, S., & Yagi, K.",
    title:
      "Awake craniotomy for brain lesions within and near the primary motor area: A retrospective analysis of factors associated with worsened paresis in 102 consecutive patients",
    venue: "Surgical Neurology International, 4, 149.",
    href: "https://doi.org/10.4103/2152-7806.122003",
  },
  {
    year: "2012",
    authors:
      "篠浦伸禎，八木一夫，小野寺聡之，山田良治，田部井勇助，塩出健人，弘光健太郎，糸井千尋，斎藤聖子，緑川晶．",
    title:
      "覚醒下を含めた脳腫瘍手術およびトラクトグラフィーによる神経線維の機能に関する考察",
    venue: "脳神経外科速報，22(10)，1179–1186．",
    href:
      "https://mol.medicalonline.jp/library/journal/abstract?GoodsID=ao7nsgse/2012/002210/010&name=1179-1186j&UserID=157.82.122.136",
    linkLabel: "Link",
  },
  {
    year: "2012",
    authors: "弘光健太郎．",
    title:
      "視覚性呼称のエラーによる半側空間無視の予測—Randt記憶検査・「耳」の線画呼称による検討—",
    venue: "中央大学大学院研究年報，42，185–192．",
  },
];

const japaneseArticleTitles = new Set([
  "意識状態の変容と脳内ネットワーク",
  "心身脳問題—からだを巡る冒険—",
  "経頭蓋直流電流刺激（tDCS）によって認められた音韻性流暢性と意味性流暢性との解離",
  "覚醒下を含めた脳腫瘍手術およびトラクトグラフィーによる神経線維の機能に関する考察",
  "視覚性呼称のエラーによる半側空間無視の予測—Randt記憶検査・「耳」の線画呼称による検討—",
]);

const englishPeerReviewedArticles = peerReviewedArticles.filter(
  (item) => !japaneseArticleTitles.has(item.title),
);

const japanesePeerReviewedArticles = peerReviewedArticles.filter((item) =>
  japaneseArticleTitles.has(item.title),
);

const preprints: RecordItem[] = [
  {
    year: "2026",
    authors:
      "Hiromitsu, K., Chiyohara, S., Asai, T., Katayama, A., Wakabayashi, M., & Imamizu, H.",
    title:
      "Behavioural and neural signatures across diverse cognitive demands in a multimodal electroencephalography-functional magnetic resonance imaging design",
    venue: "bioRxiv.",
    href: "https://doi.org/10.64898/2026.05.24.727533",
    linkLabel: "bioRxiv",
  },
  {
    year: "2026",
    authors: "Chiyohara, S., Asai, T., Hiromitsu, K., & Imamizu, H.",
    title:
      "Characterizing load-dependent changes in whole-brain activity patterns during an extended N-back task",
    venue: "bioRxiv.",
    href: "https://doi.org/10.64898/2026.06.19.733380",
    linkLabel: "bioRxiv",
  },
  {
    year: "2024",
    authors:
      "Hiromitsu, K., Asai, T., Kadota, H., Imaizumi, S., Kamata, M., & Imamizu, H.",
    title:
      "Immediate Modulation of the Blood Oxygenation Level-Dependent Signals by Dual-Site Transcranial Alternating Current Stimulation Propagates Across the Whole Brain",
    venue: "bioRxiv.",
    href: "https://doi.org/10.1101/2024.09.03.610912",
    linkLabel: "bioRxiv",
  },
  {
    year: "2023",
    authors:
      "Asai, T., Kashihara, S., Chiyohara, S., Hiromitsu, K., & Imamizu, H.",
    title:
      "Spatio-temporal “global” neurodynamics of the human brain in continuous and discrete picture: Simple statistics meet on-manifold microstates as multi-level cortical attractors",
    venue: "bioRxiv.",
    href: "https://doi.org/10.1101/2023.07.13.548951",
    linkLabel: "bioRxiv",
  },
];

const books: RecordItem[] = [
  {
    year: "2023",
    authors: "弘光健太郎．",
    title: "自己は本当に脳が作り出すのか（第4章）",
    venue:
      "田中彰吾（編著）『自己の科学は可能か：心身脳問題として考える』新曜社．",
    href: "https://www.shin-yo-sha.co.jp/book/b636528.html",
    linkLabel: "Publisher",
  },
  {
    year: "2023",
    authors: "Hiromitsu, K., & Asai, T.",
    title:
      "Generalized Internal Model of Mental Representations: Thought Insertion, Mental Agency, and the Cerebellum (Chapter 14)",
    venue:
      "In P. López-Silva & T. McClelland (Eds.), Intruders in the Mind. Oxford University Press.",
    href: "https://doi.org/10.1093/med/9780192896162.003.0014",
  },
  {
    year: "2021",
    authors: "Kanayama, N., & Hiromitsu, K.",
    title:
      "Triadic body representations in the human cerebral cortex and peripheral nerves (Chapter 9)",
    venue:
      "In Y. Ataria, S. Tanaka, & S. Gallagher (Eds.), Body Schema and Body Image: New Directions. Oxford University Press.",
    href: "https://doi.org/10.1093/oso/9780198851721.003.0009",
  },
  {
    year: "2021",
    authors: "今水寛，浅井智久，弘光健太郎．",
    title: "脳のネットワークから見た瞑想状態（第4部第2章）",
    venue:
      "蓑輪顕量（編）『仏典とマインドフルネス―負の反応とその対処法』臨川書店．",
    href: "https://www.rinsen.com/linkbooks/ISBN978-4-653-04436-9.htm",
    linkLabel: "Link",
  },
];

const patent: RecordItem[] = [
  {
    year: "2024",
    authors: "弘光健太郎，千代原真哉，浅井智久，今水寛．",
    title:
      "確信的操作度取得処理システム、確信的操作度取得処理方法、および、プログラム",
    venue: "特願2024-228112．",
  },
];

const invitedTalks: ActivityItem[] = [
  {
    year: "2024",
    citation:
      "弘光健太郎．tESによる運動主体感の因果的神経基盤探索．言語と行為の勉強会，オンライン，2024年2月18日．",
  },
  {
    year: "2023",
    citation:
      "弘光健太郎．神経心理学的アセスメント．お茶の水女子大学心理学科 教育講演，お茶の水女子大学，2023年1月．",
  },
  {
    year: "2021",
    citation:
      "弘光健太郎．脳損傷と脳介入からみる自己感．シンポジウム「自己研究の此岸と彼岸」，東京大学，2021年9月．",
  },
  {
    year: "2020",
    citation:
      "弘光健太郎．基礎と臨床にまたがる脳と心のつながり．お茶の水女子大学心理学科『認知神経科学』特別講義，お茶の水女子大学，2020年11月．",
  },
  {
    year: "2018",
    citation:
      "弘光健太郎．脳損傷患者からみた自己身体認識における空間．ミニシンポジウム「自己と空間と時間の謎—『身体意識』研究の最前線—」，東京大学駒場キャンパス，2018年11月．",
  },
  {
    year: "2018",
    citation:
      "弘光健太郎．自己身体認識の障害に関する実験心理学的研究．計測自動制御学会SI部門VR工学部会2018年度第1回研究会，埼玉大学，2018年1月．",
  },
  {
    year: "2016",
    citation:
      "弘光健太郎．覚醒下開頭術と神経心理学：脳損傷により身体認識に変容をきたした症例—体外離脱体験と触覚性消去現象—．ミニシンポジウム「基礎研究を臨床現場に伝える—認知・身体・運動研究の最前線—」，東京大学駒場キャンパス，2016年8月．",
  },
  {
    year: "2016",
    citation:
      "弘光健太郎，田中彰吾．フルボディ錯覚および視点位置変換体験のデモンストレーション．第4回エンボディードアプローチ研究会，東海大学湘南キャンパス，2016年5月．",
  },
  {
    year: "2015",
    citation:
      "弘光健太郎．身体所有感覚変容の要因に関する検討—症例研究と実験心理学的研究によるアプローチ—．Cognitive Science Meeting，千葉大学，2015年3月．",
  },
];

const oralPresentations: ActivityItem[] = [
  {
    year: "2018",
    group: "International",
    citation:
      "Hiromitsu, K. The triadic taxonomy of the body representation: Evidence from the brain-damaged patients with bodily disorders and the experimental study of bodily illusions. International Symposium: Body Schema and Body Image, Session 4, The University of Tokyo, March 2018.",
  },
  {
    year: "2026",
    group: "Domestic",
    citation:
      "弘光健太郎．自己身体認識の神経心理学：症例検討から実験検証へ．第50回日本神経心理学会学術集会 次代を担う若手研究者交流シンポジウム3，会津若松市文化センター，2026年9月．",
    note: "Forthcoming",
  },
  {
    year: "2022",
    citation:
      "弘光健太郎．脳腫瘍患者の神経心理学：症例研究からの示唆．日本心理学会第86回大会 公募シンポジウムSS-017「神経心理学における症例研究の現在」，日本大学，2022年9月．",
  },
  {
    year: "2018",
    citation:
      "弘光健太郎．脳損傷患者における身体的自己の障害—身体が自己となる契機—．日本心理学会第82回大会 公募シンポジウム，東北大学，2018年9月．",
  },
  {
    year: "2018",
    citation:
      "弘光健太郎，斎藤聖子，浜本加奈子，重宗弥生，篠浦伸禎，山田良治，緑川晶．皮膚方向運動感覚（Directional Cutaneous Kinesthesia: DCK）における時空間情報処理．第42回日本神経心理学会学術集会，山形県立保健医療大学，2018年9月．",
  },
  {
    year: "2017",
    citation:
      "弘光健太郎，浅井智久，斎藤聖子，重宗弥生，山田良治，篠浦伸禎，緑川晶．脳腫瘍患者における自己意識障害の検討—腫瘍摘出術前後における比較—．第41回日本神経心理学会学術総会，一橋講堂，2017年10月．",
  },
  {
    year: "2017",
    citation:
      "弘光健太郎．自己位置感覚の基盤となる多感覚統合と視点．日本心理学会第81回大会 公募シンポジウム，久留米大学，2017年9月．",
  },
  {
    year: "2015",
    citation:
      "弘光健太郎，糸井千尋，斎藤聖子，山田良治，篠浦信禎，緑川晶．時間情報および身体の空間的位置が触覚性消去現象に与える影響．日本高次脳機能障害学会学術総会，ベルサール渋谷ファースト，2015年12月．",
  },
  {
    year: "2015",
    citation:
      "弘光健太郎，緑川晶．「こころの時間」の臨床神経心理学：マクロおよびミクロなスケールにおける時間の知覚—体外離脱体験における脳部位・視点・時間的同期性の問題—．日本心理学会第79回大会，名古屋大学，2015年9月．",
  },
  {
    year: "2015",
    citation:
      "弘光健太郎，緑川晶．俯瞰視点が体外離脱体験に与える影響に関する実験心理学的検討．Young Perceptionists’ Seminar（YPS）兼第5回早稲田大学心理学コース研究会，多摩スポーツセンター，2015年9月．",
  },
];

const posterPresentations: ActivityItem[] = [
  {
    year: "2024",
    group: "International",
    citation:
      "Hiromitsu, K., Asai, T., & Imamizu, H. Eye movements as the state-predictor of the self. Winter Workshop on Mechanism of Brain and Mind 2024, PS16, Rusutsu, Japan, January 2024.",
  },
  {
    year: "2020",
    citation:
      "Hiromitsu, K., Saito, S., Hamamoto, K., Ochi, R., Suzuki, R., Shigemune, Y., Shinoura, N., Yamada, R., & Midorikawa, A. Predicting factors of the perioperative cognitive function in the patients with brain tumours. International Neuropsychological Society 2020 Mid-Year Virtual Event, PS9-476, July 2020.",
  },
  {
    year: "2018",
    citation:
      "Hiromitsu, K., Asai, T., Imaizumi, S., Tanaka, M., Kadota, H., & Imamizu, H. Right inferior parietal lobe mediates the relation between prediction error and sense of agency—tDCS and TMS study. The 2nd International Symposium on Embodied-Brain Systems Science, P14, Osaka, Japan, December 2018.",
  },
  {
    year: "2018",
    citation:
      "Hiromitsu, K., & Asai, T. Postural sway during full-body illusion. Winter Workshop on Mechanism of Brain and Mind 2018, PS27, Rusutsu, Japan, January 2018.",
  },
  {
    year: "2017",
    citation:
      "Hiromitsu, K., Asai, T., Saito, S., Shigemune, Y., Hamamoto, K., Shinoura, N., Yamada, R., & Midorikawa, A. Measuring the Sense of Self in Brain-damaged Patients. Science of the Self, PS18, Sydney, Australia, November 2017.",
  },
  {
    year: "2016",
    citation:
      "Hiromitsu, K., & Midorikawa, A. Self-location during out-of-body illusion. International Multisensory Research Forum, PS23, Suzhou, China, June 2016.",
  },
  {
    year: "2016",
    citation:
      "Hiromitsu, K., Itoi, C., Saito, S., Yamada, R., Shinoura, N., & Midorikawa, A. Out-of-body experiences following the posterior cingulate lesion. International Neuropsychological Society Mid-Year Meeting, PS3-16, London, UK, July 2016.",
  },
  {
    year: "2016",
    citation:
      "Hiromitsu, K. The relationship between anomalous experiences and the mental own-body transformations. International Congress of Psychology, PS27A-02-142, Yokohama, Japan, July 2016.",
  },
  {
    year: "2015",
    citation:
      "Hiromitsu, K., Itoi, C., Saito, S., Yamada, R., Shinoura, N., & Midorikawa, A. A Case of Touch-Color Synesthesia Elicited by Deficit in the Left Medial Parietal Lobe. International Neuropsychological Society Mid-Year Meeting, PS3-20, Sydney, Australia, July 2015.",
  },
  {
    year: "2015",
    citation:
      "Hiromitsu, K., & Midorikawa, A. Visual First-Person Perspective Embedded in the Knee Alters the Perception of Cutaneous Patterns. International Multisensory Research Forum, 3.68, Pisa, Italy, June 2015.",
  },
  {
    year: "2014",
    citation:
      "Hiromitsu, K., Itoi, C., Saito, S., Yamada, R., Shinoura, N., & Midorikawa, A. Tactile extinction depends on the attention to somatosensory input. International Neuropsychological Society Mid-Year Meeting, PS2-36, Jerusalem, Israel, July 2014.",
  },
  {
    year: "2013",
    citation:
      "Hiromitsu, K., Itoi, C., Saito, S., Yamada, R., Shinoura, N., & Midorikawa, A. Religious experiences and out-of-body experiences during awake surgery. International Neuropsychological Society Mid-Year Meeting, PS6-2, Amsterdam, the Netherlands, July 2013.",
  },
  {
    year: "2012",
    citation:
      "Hiromitsu, K., Itoi, C., Saito, S., Tabei, Y., Yamada, R., Shinoura, N., & Midorikawa, A. Error pattern of the picture naming predicts the brain lesion and unilateral neglect. International Neuropsychological Society Mid-Year Meeting, PS1-31, Oslo, Norway, June 2012.",
  },
  {
    year: "2023",
    group: "Domestic",
    citation:
      "弘光健太郎，浅井智久，武内千雅，鎌田将，今水寛．tESによる運動主体感の因果的神経基盤探索．超適応第5回領域全体会議，東京大学武田ホール，2023年3月．",
  },
  {
    year: "2022",
    citation:
      "弘光健太郎，武内千雅，浅井智久，今水寛．HD-tACSによる運動の自他帰属プロセスへの介入．超適応第3回領域全体会議，オンライン，2022年3月．",
  },
  {
    year: "2021",
    citation:
      "弘光健太郎，門田宏，浅井智久，田中大，濱本孝仁，今水寛．各種tESによる脳機能結合への影響．第2回超適応領域全体会議，オンライン，2021年3月．",
  },
  {
    year: "2015",
    citation:
      "弘光健太郎，糸井千尋，斎藤聖子，山田良治，篠浦信禎，緑川晶．時間情報および身体の空間位置が触覚性消去現象に与える影響．2014年度第2回「こころの時間学」領域会議，淡路夢舞台，2015年2月．",
  },
  {
    year: "2014",
    citation:
      "弘光健太郎，緑川晶．視点位置および能動的運動感覚が身体所有感覚に与える影響．多感覚研究会，広島大学，2014年11月．",
  },
  {
    year: "2014",
    citation:
      "弘光健太郎，緑川晶．経頭蓋直流電流刺激（tDCS）による言語流暢性の促進—音韻性流暢性と意味性流暢性の解離—．日本心理学会第78回大会，2AM-2-007，京都，2014年9月．",
  },
  {
    year: "2013",
    citation:
      "弘光健太郎，緑川晶．体外離脱体験を誘発する状況に関する実験心理学的検討—俯瞰視点における体外離脱体験の誘発—．日本心理学会第77回大会，1PM-018，北海道，2013年9月．",
  },
];

const media: ActivityItem[] = [
  {
    year: "2017",
    citation:
      "BS日本テレビ『片岡愛之助の解明！歴史捜査』「なぜ北斎は世界に認められたのか？」に、体外離脱体験に関連する脳領域について解説する研究者として出演（2017年12月21日放映）．",
  },
  {
    year: "2016",
    citation:
      "テレビ東京『主治医の見つかる診療所』「脳の名医が実践する！最新・最強 大人の脳育法」に、覚醒下開頭術のスタッフとして出演（2016年5月23日放映）．",
  },
];

function HighlightedName({ children }: { children: string }) {
  const fragments = children.split(/(Hiromitsu, K\.|Hiromitsu, K|弘光健太郎)/g);

  return (
    <>
      {fragments.map((fragment, index) =>
        /^(Hiromitsu, K\.?|弘光健太郎)$/.test(fragment) ? (
          <strong key={`${fragment}-${index}`}>{fragment}</strong>
        ) : (
          fragment
        ),
      )}
    </>
  );
}

function SectionHeading({
  number,
  title,
  count,
}: {
  number: string;
  title: string;
  count?: number;
}) {
  return (
    <div className="publication-section-heading">
      <p className="section-number">{number}</p>
      <h2>{title}</h2>
      {typeof count === "number" ? <p className="section-count">{count}</p> : null}
    </div>
  );
}

function PublicationList({
  items,
  startIndex = 0,
  ariaLabel,
}: {
  items: RecordItem[];
  startIndex?: number;
  ariaLabel?: string;
}) {
  return (
    <ol className="publication-list" aria-label={ariaLabel}>
      {items.map((item, index) => (
        <li className="publication-item" key={`${item.year}-${item.title}`}>
          <p className="publication-index">
            {String(startIndex + index + 1).padStart(2, "0")}
          </p>
          <div className="publication-copy">
            <p className="publication-authors">
              <HighlightedName>{item.authors}</HighlightedName>
            </p>
            <h3>{item.title}</h3>
            <p className="publication-venue">{item.venue}</p>
            {item.note ? <p className="publication-note">{item.note}</p> : null}
          </div>
          <p className="publication-year">{item.year}</p>
          {item.href ? (
            <a
              className="publication-link"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.linkLabel ?? "DOI"}: ${item.title}`}
            >
              {item.linkLabel ?? "DOI"} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="publication-link-placeholder" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}

function PeerReviewedArticlesSection() {
  return (
    <section className="publication-section" aria-labelledby="section-01">
      <div id="section-01">
        <SectionHeading
          number="01"
          title="Peer-Reviewed Articles"
          count={peerReviewedArticles.length}
        />
      </div>
      <div className="publication-language-groups">
        <PublicationList
          items={englishPeerReviewedArticles}
          ariaLabel="English-language peer-reviewed articles"
        />
        <div className="publication-subsection-heading">
          <h3>Japanese Articles</h3>
          <p>{japanesePeerReviewedArticles.length}</p>
        </div>
        <PublicationList
          items={japanesePeerReviewedArticles}
          startIndex={englishPeerReviewedArticles.length}
          ariaLabel="Japanese-language peer-reviewed articles"
        />
      </div>
    </section>
  );
}

function ActivityList({ items }: { items: ActivityItem[] }) {
  return (
    <ol className="activity-list">
      {items.map((item, index) => (
        <li key={`${item.year}-${index}`}>
          {item.group ? <p className="activity-group-label">{item.group}</p> : null}
          <p className="activity-year">{item.year}</p>
          <p className="activity-citation">
            <HighlightedName>{item.citation}</HighlightedName>
            {item.note ? <span className="activity-note">{item.note}</span> : null}
          </p>
        </li>
      ))}
    </ol>
  );
}

function PublicationSection({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: RecordItem[];
}) {
  return (
    <section className="publication-section" aria-labelledby={`section-${number}`}>
      <div id={`section-${number}`}>
        <SectionHeading number={number} title={title} count={items.length} />
      </div>
      <PublicationList items={items} />
    </section>
  );
}

function ActivityDetails({
  number,
  title,
  count,
  children,
}: {
  number: string;
  title: string;
  count: number;
  children: ReactNode;
}) {
  return (
    <details className="activity-details">
      <summary>
        <span className="activity-summary-number">{number}</span>
        <span className="activity-summary-title">{title}</span>
        <span className="activity-summary-count">{count}</span>
        <span className="activity-summary-control" aria-hidden="true" />
      </summary>
      <div className="activity-details-content">{children}</div>
    </details>
  );
}

export default function Publications() {
  return (
    <div className="site-shell publications-page">
      <SiteHeader current="publications" />

      <main className="publications-main">
        <header className="publications-heading">
          <div>
            <p className="eyebrow">Academic record / 2026</p>
            <h1>Publications</h1>
          </div>
          <div className="publication-profiles" aria-label="Academic profiles">
            <a
              href="https://scholar.google.com/citations?hl=en&user=i3Hml0wAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://orcid.org/0000-0002-3564-4514"
              target="_blank"
              rel="noreferrer"
            >
              ORCID <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://researchmap.jp/kentarohiromtisu?lang=ja"
              target="_blank"
              rel="noreferrer"
            >
              researchmap <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <div className="publication-sections">
          <PeerReviewedArticlesSection />
          <PublicationSection number="02" title="Preprints" items={preprints} />
          <PublicationSection
            number="03"
            title="Books & Book Chapters"
            items={books}
          />
          <PublicationSection number="04" title="Patent" items={patent} />
        </div>

        <section className="academic-activities" aria-labelledby="academic-activities">
          <div className="activities-heading">
            <p className="eyebrow">Selected record</p>
            <h2 id="academic-activities">Academic Activities</h2>
            <p>
              Poster presentations are limited to those for which Kentaro
              Hiromitsu is the first author.
            </p>
          </div>

          <div className="activity-groups">
            <ActivityDetails
              number="05"
              title="Invited Talks & Lectures"
              count={invitedTalks.length}
            >
              <ActivityList items={invitedTalks} />
            </ActivityDetails>
            <ActivityDetails
              number="06"
              title="Oral Presentations"
              count={oralPresentations.length}
            >
              <ActivityList items={oralPresentations} />
            </ActivityDetails>
            <ActivityDetails
              number="07"
              title="First-Author Poster Presentations"
              count={posterPresentations.length}
            >
              <ActivityList items={posterPresentations} />
            </ActivityDetails>
            <ActivityDetails number="08" title="Media" count={media.length}>
              <ActivityList items={media} />
            </ActivityDetails>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
