import {
    Box,
    Typography,
    TextField,
    Grid,
    Card,
    CardContent,
    Button,
    Divider,
    useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import User from "../../api/User";
import { useState } from "react";

const ContactSection: React.FC = () => {
    const theme = useTheme();

    // Form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const { mutate: sendMessage, isPending } = useMutation({
        mutationFn: User.sendContactMessage,
        onSuccess: () => {
            toast.success("Message sent successfully!");
            setForm({ name: "", email: "", subject: "", message: "" }); // reset
        },
        onError: () => {
            toast.error("Failed to send message. Please try again.");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(form);
    };

    return (
        <Box sx={{ pt: 6, pb: 5 }}>
            <Grid
                container
                spacing={4}
                justifyContent="center"
                px={{ xs: 2, md: 10 }}
            >
                {/* Contact Info */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                                <LocationOnIcon
                                    color="success"
                                    sx={{ mr: 2 }}
                                />
                                <Typography variant="body1">
                                    2715 Ash Dr. San Jose, South Dakota 83475
                                </Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Box display="flex" alignItems="center" mb={2}>
                                <EmailIcon color="success" sx={{ mr: 2 }} />
                                <Typography variant="body2">
                                    Help: mangadavid2@gmail.com
                                </Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Box display="flex" alignItems="center">
                                <PhoneIcon color="success" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="body2">
                                        (209) 555-0114
                                    </Typography>
                                    <Typography variant="body2">
                                        (964) 333-0487
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Contact Form */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                gutterBottom
                                color="success.main"
                            >
                                Just Say Hello!
                            </Typography>
                            <Typography
                                variant="body2"
                                mb={3}
                                color="text.secondary"
                            >
                                Do you fancy saying hi to me or want to get
                                started with your project and need my help? Feel
                                free to contact me.
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            variant="outlined"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            variant="outlined"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            variant="outlined"
                                            value={form.subject}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Message"
                                            name="message"
                                            variant="outlined"
                                            value={form.message}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="success"
                                            disabled={isPending}
                                        >
                                            {isPending
                                                ? "Sending..."
                                                : "Send Message"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Map */}
            <Box mt={8}>
                <iframe
                    title="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.876464829739!2d80.5009!3d6.7069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae139c60e57e48f%3A0xa39e6cc0bde46e17!2sMatara!5e0!3m2!1sen!2slk!4v1611234567890"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    );
};

export default ContactSection;
