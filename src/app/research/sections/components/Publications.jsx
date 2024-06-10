import Button from "@/app/component/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Publications = () => {
  const publicationList = [
    {
      img: "publication4.png",
      technology: "TECHNOLOGY",
      year: "2023",
      desciption:
        "A. Agarwal, R. Dabral, A. Jain, G. Ramakrishnan, “Skew-Robust Human-Object Interactions in Videos,” in Proc. of Winter Conference on Applications of Computer Vision (WACV 2023), Hawaii, 2023.",
      linkName: "Link",
      linkTo:
        "https://openaccess.thecvf.com/content/WACV2023/html/Agarwal_Skew-Robust_Human-Object_Interactions_in_Videos_WACV_2023_paper.html",
      downloadName: "Download PDF",
      downloadTo: "https://openaccess.thecvf.com/content/WACV2023/papers/Agarwal_Skew-Robust_Human-Object_Interactions_in_Videos_WACV_2023_paper.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication5.webp",
      technology: "TECHNOLOGY",
      year: "2021",
      desciption:
        "R. Dabral, S. Shimada, A. Jain C. Theobalt, and V. Golyanik, “Gravity-Aware 3D Human-Object Reconstruction” in Proc. of International Conference of Computer Vision (ICCV 2021), Virtual, October 2021.",
      linkName: "Link",
      linkTo: "https://4dqv.mpi-inf.mpg.de/GraviCap/",
      downloadName: "Download PDF",
      downloadTo: "http://arxiv.org/pdf/2108.08844",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication6.webp",
      technology: "TECHNOLOGY",
      year: "2021",
      desciption:
        "C. Kumar, J. Ramesh, B. Chakraborty, R. Raman, C. Weinrich, A. Mundhada, A. Jain, F. Flohr , “VRU Pose-SSD: Multiperson Pose Estimation For Automated Driving” in proceedings of Innovative Applications of Artificial Intelligence (IAAI 2021), Virtual, February 2021.",
      linkName: "Link",
      linkTo: "https://ojs.aaai.org/index.php/AAAI/article/view/17800",
      downloadName: "Download PDF",
      downloadTo: "http://arjunjain.co.in/resources/iaai-2021.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication7.webp",
      technology: "TECHNOLOGY",
      year: "2020",
      desciption:
        "R. Mitra, N. B. Gundavarapu, A. Sharma, A. Jain, “Multiview-Consistent Semi-Supervised Learning for 3D Human Pose Estimation” in proceedings of Conference on Computer Vision and Pattern Recognition (CVPR 2020), Seattle, June 2020.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1908.05293",
      downloadName: "Download PDF",
      downloadTo: "http://arjunjain.co.in/resources/cvpr-2020.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication8.webp",
      technology: "TECHNOLOGY",
      year: "2019",
      desciption:
        "V. Gupta, S. K. Dwivedi, R. Dabral, A. Jain, “Progression Modelling for Online and Early Gesture Detection” in proceedings of International Conference on 3D Vision (3DV 2019 Oral), Québec City, September 2019.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1909.07945",
      downloadName: "Download PDF",
      downloadTo: "http://arjunjain.co.in/resources/poster_199_v2.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication9.webp",
      technology: "TECHNOLOGY",
      year: "2019",
      desciption:
        "R. Dabral, N. B. Gundavarapu, R. Mitra, A. Sharma, G. Ramakrishnan, A. Jain, “Multi-Person 3D Human Pose Estimation from Monocular Images” in proceedings of International Conference on 3D Vision (3DV 2019), Québec City, September 2019.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1909.10854",
      downloadName: "Download PDF",
      downloadTo: "http://arjunjain.co.in/resources/poster_146_2_v2.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication10.webp",
      technology: "TECHNOLOGY",
      year: "2019",
      desciption:
        "S. K. Dwivedi, V. Gupta, R. Mitra, S. Ahmed, A. Jain, “ProtoGAN: Towards Few Shot Learning for Action Recognition” in proceedings of ICCV Workshop on Multi-Discipline Approach for Learning Concepts – Zero-Shot, One-Shot, Few-Shot and Beyond (ICCV Workshop 2019), Seoul, October 2019.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1909.07945",
      downloadName: "Download PDF",
      downloadTo: "https://arxiv.org/pdf/1909.07945",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication11.webp",
      technology: "TECHNOLOGY",
      year: "2019",
      desciption:
        "S. Sharma, P. T. Varigonda, P. Bindal, A. Sharma, A. Jain, “Monocular 3D Human Pose Estimation by Generation and Ordinal Ranking” in proceedings of International Conference on Computer Vision (ICCV 2019), Seoul, October 2019.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1904.01324",
      downloadName: "Download PDF",
      downloadTo: "http://arjunjain.co.in/resources/ICCV19Poster.pdf",
      extraName: "Code",
      extraLink: "https://github.com/ssfootball04/generative_pose",
    },
    {
      img: "publication12.webp",
      technology: "TECHNOLOGY",
      year: "2019",
      desciption:
        "N. Jain, S. Shah, A. Sharma, A. Jain, “On the Robustness of Human Pose Estimation” in proceedings of CVPR Workshop on Augmented Human Humancentric Understanding and 2D/3D Synthesis (CVPR Workshop 2019), Long Beach, June 2019.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1908.06401",
      downloadName: "Download PDF",
      downloadTo:
        "http://openaccess.thecvf.com/content_CVPRW_2019/papers/Augmented%20Human%20Human-centric%20Understanding%20and%202D-3D%20Synthesis/Jain_On_the_Robustness_of_Human_Pose_Estimation_CVPRW_2019_paper.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication13.webp",
      technology: "TECHNOLOGY",
      year: "2019",
      desciption:
        "N. B. Gundavarapu, D. Srivastava, R. Mitra, A. Sharma, A. Jain, “Structured Aleatoric Uncertainty in Human Pose Estimation” in proceedings of CVPR Workshop on Uncertainty and Robustness in Deep Visual Learning (CVPR Workshop 2019), Long Beach, June 2019.",
      linkName: "Link",
      linkTo:
        "http://openaccess.thecvf.com/content_CVPRW_2019/html/Uncertainty_and_Robustness_in_Deep_Visual_Learning/Gundavarapu_Structured_Aleatoric_Uncertainty_in_Human_Pose_Estimation_CVPRW_2019_paper.html",
      downloadName: "Download PDF",
      downloadTo: "https://openaccess.thecvf.com/content_CVPRW_2019/papers/Uncertainty%20and%20Robustness%20in%20Deep%20Visual%20Learning/Gundavarapu_Structured_Aleatoric_Uncertainty_in_Human_Pose_Estimation_CVPRW_2019_paper.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication1.webp",
      technology: "TECHNOLOGY",
      year: "2018",
      desciption:
        "N. Doiphode, R. Mitra, S. Ahmed, A. Jain, “An Improved Learning Framework for Covariant Local Feature Detection” in proceedings of Asian Conference on Computer Vision (ACCV 2018), Perth, December 2018",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1811.00438",
      downloadName: "Download PDF",
      downloadTo: "http://arjunjain.co.in/accv2018/ACCV-2018-poster.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication14.webp",
      technology: "TECHNOLOGY",
      year: "2018",
      desciption:
        "R. Dabral, A. Mundhada, U. Kusupati, S. Afaque, A. Sharma, A. Jain, “Learning 3D Human Pose from Structure and Motion”, in proceedings of European Conference on Computer Vision (ECCV 2018), Munich, September 2018.",
      linkName: "Project",
      linkTo: "https://www.cse.iitb.ac.in/~rdabral/3DPose/",
      downloadName: "Download PDF",
      downloadTo: "https://arxiv.org/pdf/1711.09250v2",
      extraName: "Video",
      extraLink: "https://www.youtube.com/watch?v=FILdj0LuvjU",
    },
    {
      img: "publication15.webp",
      technology: "TECHNOLOGY",
      year: "2017",
      desciption:
        "R. Mitra, N. Doiphode, U. Gautam, S. Narayan, S. Ahmed, S. Chandran, A. Jain, “A Large Dataset for Improving Patch Matching” in (arXiv e-prints 2017).",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1801.01466",
      downloadName: "Download PDF",
      downloadTo: "https://arxiv.org/pdf/1801.01466",
      extraName: "Code",
      extraLink: "https://github.com/rmitra/PS-Dataset",
    },
    {
      img: "publication16.webp",
      technology: "TECHNOLOGY",
      year: "2017",
      desciption:
        "R. Mitra, J. Zhang, S. Narayan, S. Ahmed, S. Chandran, A. Jain, “Improved Descriptors for Patch Matching and Reconstruction” in proceedings of ICCV Workshop on Compact and Efficient Feature Representation and Learning (CEFRL) (ICCV Workshop 2017), Venice, October 2017.",
      linkName: "Link",
      linkTo: "https://openaccess.thecvf.com/content_ICCV_2017_workshops/w18/html/Mitra_Improved_Descriptors_for_ICCV_2017_paper.html",
      downloadName: "Download PDF",
      downloadTo: "",
      extraName: "Code",
      extraLink: "",
    },
    {
      img: "publication2.webp",
      technology: "TECHNOLOGY",
      year: "2016",
      desciption:
        "A. Elhayek, E. Aguiar, A. Jain, J. Tompson, L. Pishchulin, M. Andriluka, C. Bregler, B. Schiele and C.Theobalt, “MARCOnI – ConvNet-based MARker-less Motion Capture in Outdoor and Indoor Scenes” in IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI 2016), 2016.",
      linkName: "View Source",
      linkTo: "https://dl.acm.org/doi/10.1109/TPAMI.2016.2557779",
      downloadName: "Download PDF",
      downloadTo: "",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication17.webp",
      technology: "TECHNOLOGY",
      year: "2016",
      desciption:
        "Theano Development Team, “Theano: A Python framework for fast computation of mathematical expressions” in (arXiv e-prints), 2016.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1605.02688",
      downloadName: "Download PDF",
      downloadTo: "http://arxiv.org/pdf/1605.02688.pdf",
      extraName: "Code",
      extraLink: "",
    },
    {
      img: "publication18.webp",
      technology: "TECHNOLOGY",
      year: "2015",
      desciption:
        "A. Jain, C. Chen, T. Thormählen, D. Metaxas, H.-P. Seidel, “Multi-Layer Stencil Creation from Images” in Computers & Graphics (C & G 2015), January 2015.",
      linkName: "Link",
      linkTo:
        "http://www.sciencedirect.com/science/article/pii/S0097849315000114",
      downloadName: "Download PDF",
      downloadTo: "",
      extraName: "Project",
      extraLink: "http://stencilcreator.org/",
    },
    {
      img: "publication19.webp",
      technology: "TECHNOLOGY",
      year: "2015",
      desciption:
        "A. Elhayek, E. Aguiar, A. Jain, J. Tompson, L. Pishchulin, M. Andriluka, C. Bregler, B. Schiele C. Theobalt, “Efficient ConvNet-based Marker-less Motion Capture in General Scenes with a Low Number of Cameras”, in proceedings of Conference on Computer Vision and Pattern Recognition (CVPR 2015), Boston, June 2015.",
      linkName: "Link",
      linkTo: "http://gvv.mpi-inf.mpg.de/projects/convNet_moCap/",
      downloadName: "Download PDF",
      downloadTo:
        "http://gvv.mpi-inf.mpg.de/projects/convNet_moCap/vids/CVPR15.pdf",
      extraName: "Video",
      extraLink:
        "http://gvv.mpi-inf.mpg.de/projects/convNet_moCap/vids/video.mp4",
    },
    {
      img: "publication20.webp",
      technology: "TECHNOLOGY",
      year: "2015",
      desciption:
        "J. Tompson, R. Goroshin, A. Jain, Y. LeCun, C. Bregler, “Efficient Object Localization Using Convolutional Networks”, in proceedings of Conference on Computer Vision and Pattern Recognition (CVPR 2015), Boston, June 2015.",
      linkName: "Link",
      linkTo: "https://arxiv.org/abs/1411.4280",
      downloadName: "Download PDF",
      downloadTo: "http://arxiv.org/pdf/1411.4280.pdf",
      extraName: "Video",
      extraLink: "",
    },
    {
      img: "publication3.webp",
      technology: "TECHNOLOGY",
      year: "2014",
      desciption:
        "A. Jain, J. Tompson, Y. LeCun, C. Bregler, “Modeep: A Deep Learning Framework Using Motion Features for Human Pose Estimation” in proceedings of Asian Conference on Computer Vision (ACCV 2014), Singapore, November 2014.",
      linkName: "Data",
      linkTo: "http://arjunjain.co.in/accv2014/",
      downloadName: "Download PDF",
      downloadTo: "http://arxiv.org/pdf/1409.7963v1.pdf",
      extraName: "",
      extraLink: "",
    },
    {
      img: "publication21.webp",
      technology: "TECHNOLOGY",
      year: "2014",
      desciption:
        "J. Tompson, A. Jain, Y. LeCun, C. Bregler, “Joint Training of a Convolutional Network and a Graphical Model for Human Pose Estimation” in proceedings of Neural Information Processing Systems (NIPS 2014), Montreal, Canada, December 2014.",
      linkName: "Link",
      linkTo: "http://arxiv.org/abs/1406.2984",
      downloadName: "Download PDF",
      downloadTo: "https://arxiv.org/pdf/1406.2984",
      extraName: "Video",
      extraLink: "",
    },
    {
      img: "publication22.webp",
      technology: "TECHNOLOGY",
      year: "2014",
      desciption:
        "A. Jain, J. Tompson, M. Andriluka, G. W. Taylor, C. Bregler, “Learning Human Pose Estimation Features with Convolutional Networks” in proceedings of International Conference on Learning Representations 2014 (ICLR 2014), Banff, Canada, April 2014.",
      linkName: "Link",
      linkTo: "http://arxiv.org/abs/1312.7302",
      downloadName: "Download PDF",
      downloadTo: "https://cs.nyu.edu/~ajain/resources/iclr14.pdf",
      extraName: "Code",
      extraLink: "https://github.com/stencilman/deep_nets_iclr04",
    },
    {
      img: "publication23.webp",
      technology: "TECHNOLOGY",
      year: "2012",
      desciption:
        "A. Jain, T. Thormählen, T. Ritschel, and H.-P. Seidel, “Material Memex: Automatic Material Suggestions for 3D Objects” in ACM Transactions on Graphics (TOG), ACM SIGGRAPH Asia 2012 papers (SIGGRAPH Asia 2012), Singapore, December 2012.",
      linkName: "Link",
      linkTo: "http://www.mpi-inf.mpg.de/resources/MaterialMemex/",
      downloadName: "Download PDF",
      downloadTo:
        "http://www.mpi-inf.mpg.de/resources/MaterialMemex/MaterialMemex.pdf",
      extraName: "Video",
      extraLink: "http://cs.nyu.edu/~ajain/",
    },
    {
      img: "publication24.webp",
      technology: "TECHNOLOGY",
      year: "2012",
      desciption:
        "L. Pishchulin, A. Jain, M. Andriluka, T. Thormählen and B. Schiele, “Articulated People Detection and Pose Estimation: Reshaping the Future” in IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR 2012), Rhode Island, USA, 2012.",
      linkName: "Link",
      linkTo: "http://www.d2.mpi-inf.mpg.de/articulated-data",
      downloadName: "Download PDF",
      downloadTo:
        "/patents/publications/CVPR12.pdf",
      extraName: "Video",
      extraLink: "",
    },
    {
      img: "publication25.webp",
      technology: "TECHNOLOGY",
      year: "2012",
      desciption:
        "A. Jain, T. Thormählen, T. Ritschel, H.-P. Seidel, Exploring Shape Variations by 3D-Model Decomposition and Part-based Recombination, Comput. Graph. Forum, Volume 31, Issue 2, (Eurographics 2012), Cagliari, Italy, (2012).",
      linkName: "Link",
      linkTo: "http://www.mpi-inf.mpg.de/resources/3DModelRecombination/",
      downloadName: "Download PDF",
      downloadTo:
        "http://www.mpi-inf.mpg.de/resources/3DModelRecombination/3DModelRecombination.pdf",
      extraName: "Video",
      extraLink: "http://www.youtube.com/watch?v=oHrBcyLzVzM",
    },
    {
      img: "publication26.webp",
      technology: "TECHNOLOGY",
      year: "2011",
      desciption:
        "L. Pishchulin, A. Jain, C. Wojek, T. Thormählen and B. Schiele, In Good Shape: Robust People Detection based on Appearance and Shape in 22nd British Machine Vision Conference (BMVC 2011), Dundee, UK, (2011) (Oral).",
      linkName: "Link",
      linkTo: "http://www.d2.mpi-inf.mpg.de/content/shape4data",
      downloadName: "Download PDF",
      downloadTo: "http://www.mpi-inf.mpg.de/~thormae/paper/BMVC11.pdf",
      extraName: "Video",
      extraLink: "",
    },
    {
      img: "publication27.webp",
      technology: "TECHNOLOGY",
      year: "2011",
      desciption:
        "L. Pishchulin, A. Jain, C.Wojek, M. Andriluka, T. Thormählen, and B. Schiele, Learning people detection models from few training samples in proceedings of Computer Vision and Pattern Recognition (CVPR 2011), Colorado Springs, USA, 2011.",
      linkName: "Link",
      linkTo: "http://www.d2.mpi-inf.mpg.de/content/shape4data",
      downloadName: "Download PDF",
      downloadTo:
        "http://www.d2.mpi-inf.mpg.de/sites/default/files/pishchulin2011cvpr.pdf",
      extraName: "Website",
      extraLink: "",
    },
    {
      img: "publication28.webp",
      technology: "TECHNOLOGY",
      year: "2010",
      desciption:
        "A. Jain, T. Thormählen, H.-P. Seidel, and C. Theobalt, “MovieReshape: Tracking and Reshaping of Humans in Videos” in ACM Transactions on Graphics (TOG), ACM SIGGRAPH Asia 2010 papers, Volume 29, Issue 5 (SIGGRAPH Asia 2010), Seoul, South Korea, December 2010.",
      linkName: "Link",
      linkTo: "http://www.mpi-inf.mpg.de/resources/MovieReshape/",
      downloadName: "Download PDF",
      downloadTo: "http://www.mpi-inf.mpg.de/~thormae/paper/SiggraphAsia10.pdf",
      extraName: "Video",
      extraLink:
        "http://www.youtube.com/watch?v=zXSj4pcl9Ao&feature=player_embedded",
    },
    {
      img: "publication29.webp",
      technology: "TECHNOLOGY",
      year: "2010",
      desciption:
        "A. Jain, C. Kurz, T. Thormählen, H.-P. Seidel, “Exploiting Global Connectivity Constraints for Reconstruction of 3D Line Segment from Images” in IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR 2010), San Francisco, California, June 2010.",
      linkName: "Link",
      linkTo: "http://www.mpi-inf.mpg.de/resources/LineReconstruction/",
      downloadName: "Download PDF",
      downloadTo:
        "http://www.mpi-inf.mpg.de/resources/LineReconstruction/paper/cvpr2010.pdf",
      extraName: "Video",
      extraLink: "",
    },
    {
      img: "publication30.webp",
      technology: "TECHNOLOGY",
      year: "2008",
      desciption:
        "L. Ballan, M. Bertini, A. Del Bimbo, and A. Jain (alphabatical order), “Automatic Trademark Detection and Recognition in Sport Videos,” in Proc. of IEEE Int.l Conference on Multimedia & Expo (ICME 2008) , Hannover, Germany, 2008.",
      linkName: "Link",
      linkTo: "http://www.lambertoballan.net/research/trademarks/",
      downloadName: "Download PDF",
      downloadTo:
        "http://www.micc.unifi.it/publications/2008/BBDJ08/ballan-icme08.pdf",
      extraName: "Video",
      extraLink: "",
    },
    {
      img: "publication31.webp",
      technology: "TECHNOLOGY",
      year: "2008",
      desciption:
        "L. Ballan, M. Bertini, and A. Jain (alphabatical order), “A System for Automatic Detection and Recognition of Advertising Trademarks in Sports Videos,” in Proc. of ACM Int.l Conference on Multimedia (MM 2008), Vancouver, BC, Canada, 2008.",
      linkName: "Link",
      linkTo: "",
      downloadName: "Download PDF",
      downloadTo:
        "http://www.micc.unifi.it/publications/2008/BBJ08/ballan-demo_mm08.pdf",
      extraName: "Video",
      extraLink:
        "http://www.micc.unifi.it/publications/2008/BBJ08/ballan-demo_mm08.mov",
    },
  ];
  return (
    <div className="h-auto w-full flex flex-col gap-[70px] items-center">
      {/* catagories */}
      {/* <div className="flex gap-[15px] md:gap-[35px] items-center justify-center flex-wrap">
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 1
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 2
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 3
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 4
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 5
        </div>
      </div> */}
      {/* details */}
      {publicationList.map((e, i) => (
        <div
          key={i}
          className="w-full px-[20px] md:px-[50px] lg:px-[100px] flex-col gap-[60px]"
        >
          <div
            className="flex flex-col md:flex-row gap-[30px] md:gap-[5%] rounded-[18px] items-center border border-[#1A2758] w-full h-auto p-[20px] md:px-[60px] md:py-[40px]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div className="w-full md:w-[40%]">
              <Image
                className="rounded-[18px] w-full md:w-[370px]"
                src={`/patents/publications/${e.img}`}
                height="370"
                width="370"
                alt=""
              />
            </div>
            <div className="w-full md:w-[55%] flex flex-col gap-[20px]">
              {/* head */}
              <div className="flex gap-[20px] flex-wrap">
                <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
                  {e.technology}
                </div>
                <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
                  {e.year}
                </div>
              </div>
              {/* body */}
              <div>
                <h5 className="text-white font-aeonik font-light tracking-normal text-[30px]">
                  {e.desciption}
                </h5>
              </div>
              {/* footer */}
              <div className="flex gap-[20px] items-center flex-wrap">
                {e?.linkTo.length > 1 && (
                  <Link target="_blank" href={e.linkTo}>
                    <div
                      className="border border-[#F3F3F3] p-[12px] cursor-pointer text-white rounded-full font-bwmss01 font-light min-h-[55px] pt-[17px] min-w-[120px] text-center"
                      style={{
                        background:
                          "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                      }}
                    >
                      {e.linkName}
                    </div>
                  </Link>
                )}
                {e?.extraLink.length > 1 && (
                  <Link target="_blank" href={e.extraLink}>
                    <div
                      className="border border-[#F3F3F3] p-[12px] cursor-pointer text-white rounded-full font-bwmss01 font-light min-h-[55px] pt-[17px] min-w-[120px] text-center"
                      style={{
                        background:
                          "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                      }}
                    >
                      {e.extraName}
                    </div>
                  </Link>
                )}
                {e?.downloadTo.length > 1 && (
                  <Button
                    target={"_blank"}
                    to={e.downloadTo}
                    name={e.downloadName}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;
