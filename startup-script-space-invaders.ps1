# Install IIS
Install-WindowsFeature -name Web-Server -IncludeManagementTools

# Remove the Default Home Page
cd C:\inetpub\wwwroot
rm iisstart.*

# Copy Space Invaders Web site from Google Cloud Storage
gsutil cp -R gs://gcp-for-azure-pros/space-invaders/* ./

 
 
 