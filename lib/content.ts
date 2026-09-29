// Edit everything the business owner may want to change here.
export const business = {
  name: "Dr. Shine's", fullName: "Dr. Shine's Dental Clinic & Orthodontic Speciality Centre",
  tagline: "Gentle, clearly explained dental care in Pathanamthitta.",
  address: ["KSRTC Cross Road, Near Old Private Bus Stand", "Pathanamthitta, Kerala 689645"], plusCode: "7Q8Q+G5 Pathanamthitta",
  phone: "070128 68192", phoneHref: "tel:+917012868192",
  whatsapp: "917012868192",          // used by the enquiry form; set "" to disable
  email: "",                          // optional: if set, the form uses email instead of WhatsApp
  website: "http://www.drshinesdentalclinic.com/",
  siteUrl: "https://www.drshinesdentalclinic.com", // used for SEO canonical/sitemap; change to your live domain
  hours: [["Today", "Open · closes 6:30 PM"], ["Other days", "Please call to confirm timings"]],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Dr.Shine's dental clinic and orthodontic speciality centre, KSRTC Cross Road, Pathanamthitta 689645"),
  reelVideos: [] as { src: string; poster?: string }[], // clean video-only reels: put mp4 files in /public/reels and list e.g. { src: "/reels/one.mp4" }
  reelCrop: { top: 64, bottom: 110 }, // px of Instagram header/footer hidden around each embed (tweak if needed)
  instagramReels: ["DdmfYAbTZ_g","Dc6gTc1JLuc","Dc096bEM0oh","DcvM7PtoAT9","DalDkv-JbXj","DWolKQUiEkc","DWN9zOeiLy6","DWElM_niAbO","DV8mzkKCIMg","DUVwclyiS3T","DRFRt89ifqi","DRFRVK5CaN8","CnfBfPLI4vY","CmRYRaaNiBh","Cl8zUwsuzwB","ClgWN2tpVKK"],
};
export const stats = { rating: "5.0", ratingLabel: "Google rating", count: "232", countLabel: "patient reviews" };
export const doctor = { name: "Dr. Shine Meerasahib", role: "MDS · Orthodontist & Implant Dentist", bio: "Known by patients for explaining every step clearly, gentle care and modern technology such as CBCT and intra-oral scanning." };
export const services = [
  ["Orthodontics & Braces","Specialist orthodontic care for children and adults, including regular progress follow-ups."],
  ["Clear Aligners","Near-invisible aligner treatment planned around your smile and schedule."],
  ["Dental Implants","Replacement of missing teeth with implants, planned using digital imaging."],
  ["Smile Correction","Treatments to improve the appearance and alignment of your smile."],
  ["Root Canal & Crowns","Root canal treatment and durable crowns, including zirconia."],
  ["Extractions & Oral Surgery","Comfortable tooth removal and minor oral surgery."],
  ["Children's Dentistry","Patient, calm care for young patients."],
  ["Check-ups & Cleaning","Routine exams, cleaning and preventive advice."],
] as const;
export const principles = [
  ["Clear explanations","Every procedure and option is explained before treatment begins."],
  ["Gentle, supportive care","Patients say the team puts nervous visitors at ease."],
  ["Modern technology","CBCT scanning and intra-oral scanning support accurate planning."],
  ["Comfortable clinic","A clean, well-maintained space, with ground-floor arrangements for patients who need them."],
] as const;
export const steps = [
  ["01","Get in touch","Call the clinic or send an enquiry."],
  ["02","Come in","Visit us near the Old Private Bus Stand."],
  ["03","Scan & examine","Modern imaging helps us understand your teeth."],
  ["04","Plan together","We explain findings and your options clearly."],
  ["05","Treatment & follow-up","Care with regular check-ins."],
] as const;
// Short extracts from public Google reviews.
export const testimonials = [
  ["Dr. Shine is extremely skilled, knowledgeable, and takes the time to explain every procedure clearly.","Manu Mohandas Nair"],
  ["The clinic has a nice ambiance, is clean, and well maintained. Dr. Shine made me feel comfortable throughout the visit.","Silill Sam Saibu"],
  ["They went above and beyond to help my daughter with her dental issue, even after working hours.","Roji Robins"],
  ["Dr. Shine was very professional, gentle, and kind enough to explain everything clearly.","Jose Samuel"],
  ["The treatment was smooth and comfortable, and everything was explained clearly.","Alan Alex"],
  ["The clinic staff went out of their way to arrange my tooth removal procedure on the ground floor.","Vishnu C Nair"],
] as const;
export const faqs = [
  ["Are you accepting new patients?","Yes. Call the clinic or send an enquiry and we'll help you with an appointment."],
  ["Do you offer orthodontic treatment and clear aligners?","Yes. The centre specialises in orthodontics, including clear aligners, for children and adults."],
  ["Do you place dental implants?","Yes. Implant treatment is planned with digital imaging and explained step by step."],
  ["Is there a ground-floor option for patients with mobility needs?","Patients have shared that the staff arranged ground-floor treatment for them. Please call ahead so we can plan for you."],
  ["What are your opening hours?","Please call +91 70128 68192 to confirm timings for your day."],
  ["Where are you located?","KSRTC Cross Road, near the Old Private Bus Stand, Pathanamthitta, Kerala 689645."],
] as const;
export const formServices = ["General check-up","Orthodontics / braces","Clear aligners","Dental implants","Root canal / crown","Tooth extraction","Children's dentistry","Other"];
