# MorphoMob Infra Solutions - AWS Elastic Beanstalk Deployment

This is the restructured version of the MorphoMob Infra Solutions application, configured for AWS Elastic Beanstalk deployment.

## Project Structure

```
morphomob-eb-deploy/
├── package.json          # Combined dependencies for frontend and backend
├── server/              # Backend server files
│   ├── index.js         # Main server file
│   ├── routes/          # API routes
│   ├── services/        # Business logic services
│   ├── middleware/      # Express middleware
│   └── data/           # Data storage
├── src/                # React frontend source
│   ├── components/     # React components
│   ├── pages/         # Page components
│   └── hooks/         # Custom React hooks
├── public/            # Static assets
├── .ebextensions/     # AWS Elastic Beanstalk configuration
├── Procfile          # Process definition for EB
└── dist/             # Built React app (generated during build)
```

## Key Changes for AWS Elastic Beanstalk

1. **Single package.json**: Combined frontend and backend dependencies
2. **Build process**: Vite builds React app to `dist/` folder
3. **Static serving**: Express serves the built React app from `dist/`
4. **Environment configuration**: Production settings for EB deployment

## Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Application
```bash
npm run build
```

### 3. Test Locally
```bash
npm start
```

### 4. Deploy to AWS Elastic Beanstalk

#### Option A: Using EB CLI
```bash
# Install EB CLI
pip install awsebcli

# Initialize EB application
eb init

# Create environment
eb create production

# Deploy
eb deploy
```

#### Option B: Using AWS Console
1. Create a new Elastic Beanstalk application
2. Upload the project as a ZIP file
3. Configure environment variables in EB console

## Environment Variables

Set these in your Elastic Beanstalk environment:

- `NODE_ENV`: production
- `PORT`: 8081 (EB default)
- `SMTP_HOST`: Your SMTP server
- `SMTP_PORT`: SMTP port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `JWT_SECRET`: JWT signing secret

## Build Process

The application uses the following build process:

1. `npm install` - Install all dependencies
2. `npm run build` - Build React app with Vite
3. `npm start` - Start Express server serving the built app

## API Endpoints

- `/api/contact` - Contact form submissions
- `/api/quotes` - Quote management
- `/api/services` - Services information
- `/api/admin` - Admin functionality
- `/api/analytics` - Analytics data
- `/api/health` - Health check

## Notes

- The React app is built to the `dist/` directory
- Express serves static files from `dist/` in production
- All API routes are prefixed with `/api`
- The server handles both API requests and serves the React SPA 