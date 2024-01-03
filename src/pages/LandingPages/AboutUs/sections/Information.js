/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpg";
import bgBack from "assets/images/rotating-card-bg-back.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                // icon="touch_app"
                title={<>About Us</>}
                description="AI Club is a vibrant community of AI enthusiasts at OIST, Bhopal. We are a collective of students driven by curiosity, innovation, and a shared love for advancing technology."
              />
              <RotatingCardBack
                image={bgBack}
                title="Stay Ahead"
                description="Become a member, attend our events, and contribute to cutting-edge projects. Whether you're an AI enthusiast, a developer, or simply curious about the possibilities, there's a place for you here."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Contact Us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Innovative Projects"
                  description="Dive into hands-on projects that apply AI concepts to real-world challenges."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Interactive Workshops"
                  description="Join our workshops led by industry experts and experienced members to enhance your skills."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Collaborative Learning"
                  description="Connect with like-minded individuals, share ideas, and grow together in the ever-evolving field of AI."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Networking Opportunities"
                  description="Forge connections with professionals, researchers, and fellow students passionate about AI."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
