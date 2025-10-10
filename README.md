# devnagri



If you want to **force install a package as a dev dependency** and **resolve legacy peer dependencies** (which is sometimes needed for older projects or when you get peer dependency errors), you can use the following command with npm:

```bash

npm install --save-dev --legacy-peer-deps
```

Or shorthand:
```bash
npm i --legacy-peer-deps
```

**Example:**  
To install `eslint` as a dev dependency, forcefully, and with legacy peer deps:
```bash
<code_block_to_apply_changes_from>
```

- `--legacy-peer-deps`: Ignore peer dependency conflicts (useful for older projects)

---

**Use this only if you are sure you want to bypass peer dependency checks, as it may cause issues in some cases.**

## Useful Commands

### Install a package as a dev dependency (npm)
```
npm install <package-name> --save-dev
# or shorthand
npm i <package-name> -D
```

### Install a package as a dev dependency, forcefully, with legacy peer deps (npm)
```
npm i <package-name> -D --legacy-peer-deps --force
```

### Install a package as a dev dependency (yarn)
```
yarn add <package-name> --dev
```

### Deploy build output (dist/) to remote server using scp
```
scp -r -i /home/digital/.ssh/devnagri "/home/digital/Downloads/dev-nagri-data - Copy/" digital@34.100.147.33:~/devnagri-react/

scp -r -i /home/digital/.ssh/devnagri "/home/digital/Downloads/dev-nagri-data - Copy/dist" digital@34.100.147.33:~/devnagri-react/

<!-- copy back to local -->


scp -i ~/.ssh/devnagri digital@34.100.147.33:"~/devnagri-react/src/pages/Home.jsx" "/home/digital/Downloads/dev-nagri-data - Copy/src/pages/"


scp -r -i /home/digital/.ssh/devnagri \
"/home/digital/Downloads/dev-nagri-data - Copy/src/App.jsx" \
Replace `<package-name>` with the actual package you want to install.


"homepage": "https://website.devnagri.dev/devnagri-react/"


"/home/digital/Downloads/dev-nagri-data - Copy/vite.config.js" \
"/home/digital/Downloads/dev-nagri-data - Copy/package.json" \
digital@34.100.147.33:~/devnagri-react/
```

### Deploy project excluding node_modules using rsync
```
rsync -avz -e "ssh -i /home/digital/.ssh/devnagri" --exclude 'node_modules' --exclude '.git' --exclude '.gitignore' "/home/digital/Downloads/dev-nagri-data - Copy/" digital@34.100.147.33:~/devnagri-react/


rsync -avz -e "ssh -i /home/digital/.ssh/devnagri" --exclude 'node_modules' --exclude 'dist' --exclude '.git' --exclude '.gitignore' "/home/digital/Pictures/devnagri/" digital@34.100.147.33:~/devnagri-react/
```

Replace `<package-name>` with the actual package you want to install.


"homepage": "https://website.devnagri.dev/devnagri-react/"


npm run dev
npm run build
sudo npm install -g serve

serve -s dist

<!-- login the server -->
 ssh -i /home/digital/.ssh/devnagri digital@34.100.147.33
sudo apt install nginx
sudo rm -rf /var/www/html/*
sudo mkdir -p /var/www/html/
sudo cp -r dist/* /var/www/html/

sudo vi /etc/nginx/sites-available/website.devnagri.dev

if already exits then press E for edit and :qa for exit or INSERT while edit press A.

server {
    listen 80;
    server_name website.devnagri.dev;

    root /var/www/html;

    # Serve static assets directly
    location /assets/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Fallback for SPA routes
    location /{
        try_files $uri index.html;
    }
}

Esc press
:wq
Enter press
sudo nginx -t
sudo systemctl restart nginx
sudo tail -n 50 /var/log/nginx/error.logs
grep mime.types /etc/nginx/nginx.conf
curl -I http://website.devnagri.dev/devnagri-react/assets/index-BXDHAm7v.css
curl -I http://website.devnagri.dev/devnagri-react/assets/index-BG9DjS3F.js