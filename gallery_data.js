const galleryData = [
    {
        state: "Tamil Nadu",
        folder: "Tamilnadu",
        churches: [
            {
                name: "Pr Simeon jebaraj \u2014 Kanyakumari (headquaters)",
                folder: "Pr Simeon jebaraj,Kanyakumari (headquaters)",
                pastor: "Pr Simeon jebaraj",
                location: "Kanyakumari (headquaters)",
                photos: ["086A6052.JPG", "086A6359.JPG", "086A6559.JPG", "20221225_202714.jpg"]
            },
            {
                name: "Pr.Peter \u2014 Komal Cudalore Dt",
                folder: "Pr.Peter,Komal Cudalore Dt",
                pastor: "Pr.Peter",
                location: "Komal Cudalore Dt",
                photos: ["20141004_124203.jpg", "20141004_125433.jpg", "Photo0515.jpg", "Photo0533.jpg"]
            },
            {
                name: "Pr.Sothrock \u2014 Kanchankollai Cudalore DT",
                folder: "Pr.Sothrock,Kanchankollai Cudalore DT",
                pastor: "Pr.Sothrock",
                location: "Kanchankollai Cudalore DT",
                photos: ["Image023.jpg", "Image030.jpg", "Image0525.jpg", "Kids Programme in Kanjankollai.jpg"]
            },
            {
                name: "Arakonam- Vellore Dt- Pr",
                folder: "Arakonam- Vellore Dt- Pr",
                pastor: "",
                location: "Arakonam- Vellore Dt- Pr",
                photos: ["HPIM3616.JPG", "HPIM3619.JPG", "HPIM3624.JPG", "Photo0655.jpg"]
            },
            {
                name: "Kulaseharanalloor, Nagai Dist",
                folder: "Kulaseharanalloor, Nagai Dist",
                pastor: "",
                location: "Kulaseharanalloor, Nagai Dist",
                photos: ["WhatsApp Image 2022-09-12 at 5.32.21 PM.jpeg", "WhatsApp Image 2022-09-12 at 5.32.22 PM.jpeg", "WhatsApp Image 2022-09-12 at 5.32.25 PM (1).jpeg", "WhatsApp Image 2022-09-12 at 5.32.25 PM.jpeg"]
            },
            {
                name: "Mandalakottai.Tanjore Dt. Pr",
                folder: "Mandalakottai.Tanjore Dt. Pr",
                pastor: "",
                location: "Mandalakottai.Tanjore Dt. Pr",
                photos: ["Image060.jpg", "Image061.jpg", "Image064.jpg", "Image066.jpg"]
            },
            {
                name: "Muttakkudi",
                folder: "Muttakkudi",
                pastor: "",
                location: "Muttakkudi",
                photos: ["WhatsApp Image 2022-09-13 at 10.27.43 AM (1).jpeg", "WhatsApp Image 2022-09-13 at 10.27.43 AM.jpeg", "WhatsApp Image 2022-09-13 at 10.27.45 AM (1).jpeg", "WhatsApp Image 2022-09-13 at 10.27.45 AM.jpeg"]
            },
            {
                name: "PAVAKKAL, Dharmapuri Dist",
                folder: "PAVAKKAL, Dharmapuri Dist",
                pastor: "",
                location: "PAVAKKAL, Dharmapuri Dist",
                photos: ["20140723_102410.jpg", "20140723_103219.jpg", "20140723_104900.jpg", "20140724_180019.jpg"]
            },
            {
                name: "Pr John Wesley \u2014 Kooram, Kancheepuram Dt",
                folder: "Pr John Wesley,Kooram, Kancheepuram Dt",
                pastor: "Pr John Wesley",
                location: "Kooram, Kancheepuram Dt",
                photos: ["20140726_102950.jpg", "20140726_104022_20.jpg", "WhatsApp Image 2023-07-01 at 2.33.02 PM.jpeg", "WhatsApp Image 2023-07-01 at 2.33.09 PM.jpeg"]
            },
            {
                name: "Pr Philip \u2014 Vaithiyanpettai",
                folder: "Pr Philip,Vaithiyanpettai",
                pastor: "Pr Philip",
                location: "Vaithiyanpettai",
                photos: ["20141004_085029.jpg", "Image005.jpg", "Image010.jpg", "Image016.jpg"]
            },
            {
                name: "Pr Subinraj \u2014 Veeranatham Nagai Dt",
                folder: "Pr Subinraj,Veeranatham Nagai Dt",
                pastor: "Pr Subinraj",
                location: "Veeranatham Nagai Dt",
                photos: ["20131229-011.jpeg", "20230503_125232.jpg", "20230503_125403.jpg", "IMG_0164.JPG"]
            },
            {
                name: "Pr Vincent Raj \u2014 Kathiruppu, Nagai Dt",
                folder: "Pr Vincent Raj,Kathiruppu, Nagai Dt",
                pastor: "Pr Vincent Raj",
                location: "Kathiruppu, Nagai Dt",
                photos: ["Photo0555.jpg", "Photo0556.jpg", "Photo0560.jpg", "WhatsApp Image 2023-07-01 at 10.14.19 PM.jpeg"]
            },
            {
                name: "Pr.Baskar \u2014 Muhayoor",
                folder: "Pr.Baskar,Muhayoor",
                pastor: "Pr.Baskar",
                location: "Muhayoor",
                photos: ["IMG_20170615_141714.jpg", "IMG_20170620_111918.jpg", "IMG_20170620_112655.jpg"]
            },
            {
                name: "Pr.Daniel \u2014 Kesingh - Nagai Dt",
                folder: "Pr.Daniel,Kesingh - Nagai Dt",
                pastor: "Pr.Daniel",
                location: "Kesingh - Nagai Dt",
                photos: ["3110 030.jpg", "DSC00087.JPG", "DSC00088.JPG", "DSC00107.JPG"]
            },
            {
                name: "Pr.David Kannayiram \u2014 Singarapettai Krishnagiri Dt",
                folder: "Pr.David Kannayiram,Singarapettai Krishnagiri Dt",
                pastor: "Pr.David Kannayiram",
                location: "Singarapettai Krishnagiri Dt",
                photos: ["Image0147.jpg", "Image0155.jpg", "Image0158.jpg", "Image0165.jpg"]
            },
            {
                name: "Pr.David bakthan \u2014 Madappuram",
                folder: "Pr.David bakthan,Madappuram",
                pastor: "Pr.David bakthan",
                location: "Madappuram",
                photos: ["DSC00176.JPG", "DSC00177.JPG", "DSC00182.JPG", "DSC00184.JPG"]
            },
            {
                name: "Pr.Devaselvam \u2014 Palvathunnan Nagai Dt",
                folder: "Pr.Devaselvam,Palvathunnan Nagai Dt",
                pastor: "Pr.Devaselvam",
                location: "Palvathunnan Nagai Dt",
                photos: ["20140728_112654.jpg", "20140728_112720.jpg", "20220809_114753.jpg", "Photo0570.jpg"]
            },
            {
                name: "Pr.Gideon moorthy \u2014 Aaharam Vellore Dt",
                folder: "Pr.Gideon moorthy,Aaharam Vellore Dt",
                pastor: "Pr.Gideon moorthy",
                location: "Aaharam Vellore Dt",
                photos: ["DSC00245.JPG", "DSC00266.JPG", "DSC00273.JPG", "DSC00282.JPG"]
            },
            {
                name: "Pr.Gideonmoorthy \u2014 Palangoor Vilupuram Dt",
                folder: "Pr.Gideonmoorthy,Palangoor Vilupuram Dt",
                pastor: "Pr.Gideonmoorthy",
                location: "Palangoor Vilupuram Dt",
                photos: ["HPIM3432.JPG", "HPIM3438.JPG", "Photo001283.jpg", "Photo0079.jpg"]
            },
            {
                name: "Pr.Jebakumar \u2014 Thennampattu Vellore Dt",
                folder: "Pr.Jebakumar,Thennampattu Vellore Dt",
                pastor: "Pr.Jebakumar",
                location: "Thennampattu Vellore Dt",
                photos: ["Image0243.jpg", "Image0255.jpg", "Photo0624.jpg", "Picture 048.jpg"]
            },
            {
                name: "Pr.John \u2014 Pulikadu - Tanjore Dt",
                folder: "Pr.John,Pulikadu - Tanjore Dt",
                pastor: "Pr.John",
                location: "Pulikadu - Tanjore Dt",
                photos: ["Picture 122.jpg", "Picture 125.jpg"]
            },
            {
                name: "Pr.Johnwesley \u2014 Paruthikulam Kancheepuram DT",
                folder: "Pr.Johnwesley,Paruthikulam Kancheepuram DT",
                pastor: "Pr.Johnwesley",
                location: "Paruthikulam Kancheepuram DT",
                photos: ["Image001.jpg", "Photo0029.jpg", "Photo0032.jpg", "Photo0033.jpg"]
            },
            {
                name: "Pr.Mahimaidas \u2014 Poondi - Vellore Dt",
                folder: "Pr.Mahimaidas,Poondi - Vellore Dt",
                pastor: "Pr.Mahimaidas",
                location: "Poondi - Vellore Dt",
                photos: ["20141115-003.jpeg", "20141115-013.jpeg", "20141115-014.jpeg", "20141115-018.jpeg"]
            },
            {
                name: "Pr.Mahimaidas \u2014 Sathampakkam Vellore Dt",
                folder: "Pr.Mahimaidas,Sathampakkam Vellore Dt",
                pastor: "Pr.Mahimaidas",
                location: "Sathampakkam Vellore Dt",
                photos: ["20-06-08_0943.jpg", "20-06-08_1159.jpg", "Image0078.jpg", "PICT0356.JPG"]
            },
            {
                name: "Pr.Paulraj \u2014 Chidambarapuram Nellai Dt",
                folder: "Pr.Paulraj,Chidambarapuram Nellai Dt",
                pastor: "Pr.Paulraj",
                location: "Chidambarapuram Nellai Dt",
                photos: ["10.jpg", "13.jpg", "17.jpg", "IMG_20180903_104810.jpg"]
            },
            {
                name: "Pr.Peteraia \u2014 Moohur Tanjore Dt",
                folder: "Pr.Peteraia,Moohur Tanjore Dt",
                pastor: "Pr.Peteraia",
                location: "Moohur Tanjore Dt",
                photos: ["Photo0072.jpg", "Photo0081.jpg", "Photo0084.jpg", "Photo0086.jpg"]
            },
            {
                name: "Pr.Santhosan \u2014 Kadalankudi Nagai Dt",
                folder: "Pr.Santhosan,Kadalankudi Nagai Dt",
                pastor: "Pr.Santhosan",
                location: "Kadalankudi Nagai Dt",
                photos: ["20141004_135013.jpg", "Baptism at Kadalankudi.jpg", "Picture 050.jpg", "Picture 100.jpg"]
            },
            {
                name: "Pr.Savior \u2014 Naduvakurichi Nellai Dt",
                folder: "Pr.Savior,Naduvakurichi Nellai Dt",
                pastor: "Pr.Savior",
                location: "Naduvakurichi Nellai Dt",
                photos: ["DSC00324.JPG", "DSC00327.JPG", "DSC00330.JPG", "Naduvakurichi Church.JPG"]
            },
            {
                name: "Pr.Victor Dasan \u2014 MGR Nager THIRUTHANI",
                folder: "Pr.Victor Dasan,MGR Nager THIRUTHANI",
                pastor: "Pr.Victor Dasan",
                location: "MGR Nager THIRUTHANI",
                photos: ["Photo0280.jpg", "Photo0281.jpg", "Photo0284.jpg", "Photo0286.jpg"]
            },
            {
                name: "Pr.simeon jebaraj \u2014 Thisayanvilai Nellai Dt",
                folder: "Pr.simeon jebaraj,Thisayanvilai Nellai Dt",
                pastor: "Pr.simeon jebaraj",
                location: "Thisayanvilai Nellai Dt",
                photos: ["WhatsApp Image 2026-03-04 at 7.30.47 AM (1).jpeg", "WhatsApp Image 2026-03-04 at 7.30.47 AM.jpeg", "WhatsApp Image 2026-03-04 at 7.30.48 AM (1).jpeg", "WhatsApp Image 2026-03-04 at 7.30.48 AM.jpeg"]
            },
            {
                name: "Valavallan Tuticorin Dt",
                folder: "Valavallan Tuticorin Dt",
                pastor: "",
                location: "Valavallan Tuticorin Dt",
                photos: ["DSC00014.JPG", "IMG0031A.jpg", "IMG0040A.jpg", "Image0431.jpg"]
            }
        ]
    },
    {
        state: "Andhra Pradesh",
        folder: "Andra Pradesh",
        churches: [
            {
                name: "Andra",
                folder: "Andra",
                pastor: "",
                location: "Andra",
                photos: ["20230216_110636.jpg", "20230216_110639.jpg", "20230216_150916.jpg", "20230216_150920.jpg"]
            },
            {
                name: "Chipparpalli, Tirupathi Dt",
                folder: "Chipparpalli, Tirupathi Dt",
                pastor: "",
                location: "Chipparpalli, Tirupathi Dt",
                photos: ["20141101_105732.jpg", "20141101_112731.jpg", "20141101_113741.jpg", "20141101_113841.jpg"]
            },
            {
                name: "Madakkavarikudem",
                folder: "Madakkavarikudem",
                pastor: "",
                location: "Madakkavarikudem",
                photos: ["WhatsApp Image 2022-09-13 at 6.53.23 PM.jpeg", "WhatsApp Image 2022-09-13 at 6.53.24 PM (1).jpeg", "WhatsApp Image 2022-09-13 at 6.53.26 PM (1).jpeg", "WhatsApp Image 2022-09-13 at 6.53.26 PM (2).jpeg"]
            },
            {
                name: "Mandaadi",
                folder: "Mandaadi",
                pastor: "",
                location: "Mandaadi",
                photos: ["WhatsApp Image 2022-09-12 at 6.04.23 PM (1).jpeg", "WhatsApp Image 2022-09-12 at 6.04.23 PM.jpeg", "WhatsApp Image 2022-09-12 at 6.04.24 PM (1).jpeg", "WhatsApp Image 2022-09-12 at 6.04.24 PM.jpeg"]
            },
            {
                name: "Pr. Luke \u2014 Rajivnager",
                folder: "Pr. Luke,Rajivnager",
                pastor: "Pr. Luke",
                location: "Rajivnager",
                photos: ["WhatsApp Image 2023-08-16 at 7.06.31 AM.jpeg", "WhatsApp Image 2023-08-16 at 7.06.33 AM.jpeg", "WhatsApp Image 2023-08-16 at 7.06.34 AM (1).jpeg", "WhatsApp Image 2023-08-16 at 7.06.35 AM.jpeg"]
            },
            {
                name: "Pr.John Peter \u2014 Durga nager Chittoor Dt",
                folder: "Pr.John Peter,Durga nager Chittoor Dt",
                pastor: "Pr.John Peter",
                location: "Durga nager Chittoor Dt",
                photos: ["Image0111.jpg"]
            },
            {
                name: "Prakasam \u2014 Prakasam",
                folder: "Prakasam",
                pastor: "Prakasam",
                location: "Prakasam",
                photos: ["WhatsApp Image 2022-09-13 at 10.29.31 AM.jpeg", "WhatsApp Image 2022-09-13 at 10.29.32 AM.jpeg", "WhatsApp Image 2022-09-13 at 10.29.33 AM (1).jpeg", "WhatsApp Image 2022-09-13 at 10.29.33 AM.jpeg"]
            },
            {
                name: "Thippakuntapalayam",
                folder: "Thippakuntapalayam",
                pastor: "",
                location: "Thippakuntapalayam",
                photos: ["WhatsApp Image 2022-09-12 at 5.58.58 PM (1).jpeg", "WhatsApp Image 2022-09-12 at 5.58.59 PM (1).jpeg", "WhatsApp Image 2022-09-12 at 5.58.59 PM.jpeg"]
            },
            {
                name: "Venkadakiri",
                folder: "Venkadakiri",
                pastor: "",
                location: "Venkadakiri",
                photos: ["WhatsApp Image 2022-09-12 at 11.23.22 AM (1).jpeg", "WhatsApp Image 2022-09-12 at 11.23.22 AM.jpeg", "WhatsApp Image 2022-09-12 at 11.23.23 AM.jpeg", "WhatsApp Image 2022-09-12 at 11.23.24 AM (2).jpeg"]
            },
            {
                name: "westgodavari",
                folder: "westgodavari",
                pastor: "",
                location: "westgodavari",
                photos: ["WhatsApp Image 2023-08-18 at 11.16.16 AM (1).jpeg", "WhatsApp Image 2023-08-18 at 11.16.16 AM (2).jpeg", "WhatsApp Image 2023-08-18 at 11.16.16 AM.jpeg", "WhatsApp Image 2023-08-18 at 11.16.17 AM.jpeg"]
            },
            {
                name: "Pr Aanjaneyalu \u2014 Rupaguntla Village, AP",
                folder: "Pr Aanjaneyalu, Rupaguntla Village, AP",
                pastor: "Pr Aanjaneyalu",
                location: "Rupaguntla Village, AP",
                photos: ["WhatsApp Image 2026-02-09 at 7.42.19 PM (2).jpeg", "WhatsApp Image 2026-02-09 at 7.43.40 PM.jpeg", "WhatsApp Image 2026-02-09 at 8.00.40 PM.jpeg", "WhatsApp Image 2026-02-09 at 8.00.45 PM (1).jpeg"]
            },
            {
                name: "Pr Abraham \u2014 Balaji Nager AP",
                folder: "Pr Abraham, Balaji Nager AP",
                pastor: "Pr Abraham",
                location: "Balaji Nager AP",
                photos: ["WhatsApp Image 2026-01-31 at 10.31.59 PM.jpeg", "WhatsApp Image 2026-01-31 at 10.35.10 PM (1).jpeg", "WhatsApp Image 2026-01-31 at 10.35.14 PM (1).jpeg", "WhatsApp Image 2026-01-31 at 10.35.15 PM.jpeg"]
            },
            {
                name: "Pr David \u2014 Bandirevu Vlg, AP",
                folder: "Pr David, Bandirevu Vlg, AP",
                pastor: "Pr David",
                location: "Bandirevu Vlg, AP",
                photos: ["WhatsApp Image 2026-02-11 at 4.15.12 PM.jpeg", "WhatsApp Image 2026-02-11 at 4.15.15 PM.jpeg", "WhatsApp Image 2026-02-11 at 4.15.17 PM.jpeg", "WhatsApp Image 2026-02-13 at 9.12.45 AM.jpeg"]
            }
        ]
    },
    {
        state: "Telangana",
        folder: "Telengana",
        churches: [
            {
                name: "Baskarapuram, Bhathrathri Gothagudam",
                folder: "Baskarapuram, Bhathrathri Gothagudam",
                pastor: "",
                location: "Baskarapuram, Bhathrathri Gothagudam",
                photos: ["118d32d7-715a-4ae3-99fd-929fb76a38bc.jfif", "7bd3a3e3-ac6b-4b3b-9083-10a16ebdd0a4.jfif", "87c67a5b-efcf-436d-b3ed-028b4b8ae9cd.jfif", "d70942c0-3de2-4ef3-a1fa-e49fd01edd81.jfif"]
            },
            {
                name: "Bonthgudem, Telengana",
                folder: "Bonthgudem, Telengana",
                pastor: "",
                location: "Bonthgudem, Telengana",
                photos: ["WhatsApp Image 2022-09-13 at 12.44.19 PM.jpeg", "WhatsApp Image 2022-09-13 at 12.44.23 PM.jpeg", "WhatsApp Image 2022-09-13 at 12.44.31 PM.jpeg", "WhatsApp Image 2022-09-13 at 12.44.35 PM.jpeg"]
            },
            {
                name: "Gatrala, Pathrathri Dist",
                folder: "Gatrala, Pathrathri Dist",
                pastor: "",
                location: "Gatrala, Pathrathri Dist",
                photos: ["26917c8c-5345-476a-bd56-2835b123cc90.jfif", "8a131064-5761-44c6-b048-9c66437f4e31.jfif", "beabcd2d-185a-4b8d-8420-6ce15396b810.jfif", "db19eeb7-cd76-4459-bf2e-65be90f39b0d.jfif"]
            },
            {
                name: "JALAVAHU",
                folder: "JALAVAHU",
                pastor: "",
                location: "JALAVAHU",
                photos: ["WhatsApp Image 2022-09-13 at 6.51.49 PM.jpeg", "WhatsApp Image 2022-09-13 at 6.51.51 PM (1).jpeg", "WhatsApp Image 2022-09-13 at 6.51.51 PM.jpeg", "WhatsApp Image 2022-09-13 at 6.51.53 PM.jpeg"]
            },
            {
                name: "LACHAPURAM",
                folder: "LACHAPURAM",
                pastor: "",
                location: "LACHAPURAM",
                photos: ["20220621_112759.jpg", "WhatsApp Image 2022-09-13 at 6.21.52 PM.jpeg", "WhatsApp Image 2022-09-13 at 6.21.53 PM (1).jpeg", "WhatsApp Image 2022-09-13 at 6.21.54 PM (1).jpeg"]
            },
            {
                name: "MENDIVARIGUDEM",
                folder: "MENDIVARIGUDEM",
                pastor: "",
                location: "MENDIVARIGUDEM",
                photos: ["WhatsApp Image 2023-08-15 at 4.48.50 PM.jpeg", "WhatsApp Image 2023-08-15 at 4.48.52 PM.jpeg", "WhatsApp Image 2023-08-15 at 4.48.53 PM (1).jpeg", "WhatsApp Image 2023-08-15 at 4.54.00 PM (1).jpeg"]
            },
            {
                name: "Narayanapuram, Karmam Dist",
                folder: "Narayanapuram, Karmam Dist",
                pastor: "",
                location: "Narayanapuram, Karmam Dist",
                photos: ["20230421_095356.jpg", "20230421_103846.jpg", "20230421_120158.jpg", "20230421_135500.jpg"]
            },
            {
                name: "Panduvarigudem, Bhathrathri Gothagudam",
                folder: "Panduvarigudem, Bhathrathri Gothagudam",
                pastor: "",
                location: "Panduvarigudem, Bhathrathri Gothagudam",
                photos: ["2b5aaa9b-a24f-45cb-8aaa-f10f5ec658ac.jfif", "33cd960e-0a2c-4248-bec2-2d9132bafb33.jfif", "99563bce-fdc0-4ff3-9fc6-6114bcc4720b.jfif", "d55d5b9b-efe1-4660-8493-a2b3f17577f7.jfif"]
            },
            {
                name: "Thatisubbanagudem",
                folder: "Thatisubbanagudem",
                pastor: "",
                location: "Thatisubbanagudem",
                photos: ["WhatsApp Image 2022-09-13 at 6.47.15 PM.jpeg", "WhatsApp Image 2022-09-13 at 6.47.17 PM.jpeg", "WhatsApp Image 2022-09-13 at 6.47.18 PM.jpeg", "WhatsApp Image 2022-09-13 at 6.47.19 PM.jpeg"]
            },
            {
                name: "Thimmapur",
                folder: "Thimmapur",
                pastor: "",
                location: "Thimmapur",
                photos: ["WhatsApp Image 2022-09-12 at 6.02.38 PM.jpeg", "WhatsApp Image 2022-09-12 at 6.02.39 PM (1).jpeg", "WhatsApp Image 2022-09-12 at 6.02.39 PM (2).jpeg", "WhatsApp Image 2022-09-12 at 6.02.39 PM.jpeg", "WhatsApp Image 2022-09-12 at 6.02.40 PM.jpeg"]
            },
            {
                name: "Velikal",
                folder: "Velikal",
                pastor: "",
                location: "Velikal",
                photos: ["WhatsApp Image 2022-09-14 at 11.12.09 AM (1).jpeg", "WhatsApp Image 2022-09-14 at 11.12.09 AM.jpeg"]
            },
            {
                name: "Pr Venkataraju \u2014 Bhupathyraopet, Telangana",
                folder: "Pr Venkataraju, Bhupathyraopet, Telangana",
                pastor: "Pr Venkataraju",
                location: "Bhupathyraopet, Telangana",
                photos: ["WhatsApp Image 2026-02-13 at 8.59.05 AM.jpeg", "WhatsApp Image 2026-02-13 at 8.59.08 AM (1).jpeg", "WhatsApp Image 2026-02-13 at 8.59.09 AM (1).jpeg", "WhatsApp Image 2026-02-13 at 8.59.10 AM.jpeg", "WhatsApp Image 2026-02-13 at 9.04.54 AM (1).jpeg", "WhatsApp Image 2026-02-13 at 9.05.04 AM (1).jpeg"]
            },
            {
                name: "Pr. Sodi Ezra \u2014 Sarapaka Vlg, Bhadradhri Dist. Telangana",
                folder: "Pr. Sodi Ezra, Sarapaka Vlg, Bhadradhri Dist. Telangana",
                pastor: "Pr. Sodi Ezra",
                location: "Sarapaka Vlg, Bhadradhri Dist. Telangana",
                photos: ["WhatsApp Image 2026-01-30 at 1.08.06 PM.jpeg", "WhatsApp Image 2026-01-30 at 1.11.16 PM.jpeg", "WhatsApp Image 2026-01-30 at 1.14.25 PM.jpeg", "WhatsApp Image 2026-01-30 at 11.12.21 AM.jpeg", "WhatsApp Image 2026-01-30 at 11.12.23 AM.jpeg", "WhatsApp Image 2026-01-30 at 11.15.13 AM.jpeg"]
            },
            {
                name: "Pr.Madatham \u2014 Jelugumilli Village, Eluru Dist",
                folder: "Pr.Madatham,Jelugumilli Village, Eluru Dist",
                pastor: "Pr.Madatham",
                location: "Jelugumilli Village, Eluru Dist",
                photos: ["WhatsApp Image 2026-02-10 at 3.29.05 PM.jpeg", "WhatsApp Image 2026-02-10 at 3.29.06 PM (1).jpeg", "WhatsApp Image 2026-02-10 at 3.29.07 PM.jpeg", "WhatsApp Image 2026-02-10 at 3.30.26 PM.jpeg", "WhatsApp Image 2026-02-11 at 6.44.11 AM.jpeg"]
            }
        ]
    },
    {
        state: "Chhattisgarh",
        folder: "Chhattisgarh",
        churches: [
            {
                name: "Bedmamari, Kondagaon - Chattisgarh",
                folder: "Bedmamari, Kondagaon - Chattisgarh",
                pastor: "",
                location: "Bedmamari, Kondagaon - Chattisgarh",
                photos: ["20230418_103354.jpg", "20230418_112802.jpg", "20230418_112804.jpg", "20230418_120652.jpg"]
            },
            {
                name: "Chokkawada, Paasrar Dist, Chattiskar",
                folder: "Chokkawada, Paasrar Dist, Chattiskar",
                pastor: "",
                location: "Chokkawada, Paasrar Dist, Chattiskar",
                photos: ["20230419_111245.jpg", "20230419_112254.jpg", "20230419_112324.jpg", "20230419_112448.jpg"]
            },
            {
                name: "Thanora, Paasrar Dist",
                folder: "Thanora, Paasrar Dist",
                pastor: "",
                location: "Thanora, Paasrar Dist",
                photos: ["1000016893.jpg", "1000016895.jpg", "1000016897.jpg", "1000016900.jpg"]
            }
        ]
    },
    {
        state: "Odisha",
        folder: "Odisha",
        churches: [
            {
                name: "Pasuli, Goraput Dist - Odisha",
                folder: "Pasuli, Goraput Dist - Odisha",
                pastor: "",
                location: "Pasuli, Goraput Dist - Odisha",
                photos: ["20230420_115201.jpg", "20230420_115216.jpg", "20230420_115230.jpg", "20230420_115235.jpg"]
            },
            {
                name: "Tharkudi, Koraput Dist",
                folder: "Tharkudi, Koraput Dist",
                pastor: "",
                location: "Tharkudi, Koraput Dist",
                photos: ["20230420_101339.jpg", "20230420_101354.jpg", "20230420_101358.jpg", "20230420_101408.jpg"]
            }
        ]
    }
];