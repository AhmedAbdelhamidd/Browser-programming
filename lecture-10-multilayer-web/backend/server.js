const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

const supabase = createClient(
    "https://aopxohdvnikuqccwafta.supabase.co",
    "sb_secret_mM_ppot1PEBGcleZ981VAw_kZV1OAcj"
);

app.use(cors());
app.use(express.json());

app.get("/notes", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("notes")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) throw error;
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.post("/notes", async (req, res) => {
    try {
        const { content } = req.body;
        const { data, error } = await supabase
            .from("notes")
            .insert([{ content }])
            .select();
        if (error) throw error;
        res.json(data[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.messa
