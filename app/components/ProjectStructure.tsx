"use client";

import React from "react";
import { Container, Box, Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function ProjectStructure() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            What You Get (43+ Files!)
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Professional folder structure with clean architecture
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#1E1E1E",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Box
            sx={{
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "text.primary",
              "& .folder": {
                color: "#02569B",
                fontWeight: 600,
              },
              "& .file": {
                color: "#9E9E9E",
              },
              "& .highlight": {
                color: "#00D4FF",
                fontWeight: 600,
              },
              "& .comment": {
                color: "#4CAF50",
                marginLeft: "16px",
              },
            }}
          >
            <div>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">my_app/</span>
            </div>
            <div style={{ paddingLeft: "16px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">lib/</span>
            </div>
            <div style={{ paddingLeft: "32px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">main.dart</span>{" "}
              <span className="comment"># App entry point</span>
            </div>
            <div style={{ paddingLeft: "32px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">app/</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">app.dart</span>{" "}
              <span className="comment"># Root app widget</span>
            </div>
            <div style={{ paddingLeft: "32px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder highlight">core/</span>{" "}
              <span className="comment"># Shared infrastructure</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder highlight">api/</span>{" "}
              <span className="comment"># 🌐 Network layer</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">api_client.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">api_response.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">interceptors/</span>
            </div>
            <div style={{ paddingLeft: "80px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">auth_interceptor.dart</span>
            </div>
            <div style={{ paddingLeft: "80px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">retry_interceptor.dart</span>
            </div>
            <div style={{ paddingLeft: "80px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">logger_interceptor.dart</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">config/</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">app_config.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">env_loader.dart</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder highlight">errors/</span>{" "}
              <span className="comment"># 🚨 Error handling</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">exceptions.dart</span>{" "}
              <span className="comment"># 9 custom types</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">failures.dart</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">routing/</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">app_router.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">route_guard.dart</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder highlight">storage/</span>{" "}
              <span className="comment"># 💾 Data persistence</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">local_storage.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">secure_storage.dart</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">theme/</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">app_theme.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">app_colors.dart</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">utils/</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">logger.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">validators.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">extensions.dart</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">widgets/</span>{" "}
              <span className="comment"># 🧩 Reusable components</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">loading_indicator.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">error_view.dart</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">empty_state.dart</span>
            </div>
            <div style={{ paddingLeft: "32px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder highlight">features/</span>{" "}
              <span className="comment"># Business logic</span>
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">home/</span>
            </div>
            <div style={{ paddingLeft: "64px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">presentation/</span>
            </div>
            <div style={{ paddingLeft: "80px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">pages/</span>
            </div>
            <div style={{ paddingLeft: "80px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">providers/</span>
            </div>
            <div style={{ paddingLeft: "80px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">widgets/</span>
            </div>
            <div style={{ paddingLeft: "16px" }}>
              <FolderIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="folder">test/</span>{" "}
              <span className="comment"># 🧪 Professional tests</span>
            </div>
            <div>
              <InsertDriveFileIcon
                sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}
              />
              <span className="file">pubspec.yaml</span>{" "}
              <span className="comment"># 📦 Dependencies</span>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
