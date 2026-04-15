import React from 'react';
import { Box, Container, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

function RefundPolicy() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'white',
        py: 8,
      }}
    >
      <Container sx={{ pl: { xs: 2, md: 4 }, pr: { xs: 2, md: 4 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 3,
            color: '#4f46e5',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.75rem' },
            letterSpacing: '-0.5px',
            background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Hatly Refund Policy
        </Typography>

        <Divider sx={{ mb: 4, borderColor: '#e2e8f0' }} />

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#475569',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          This Refund Policy outlines the conditions under which shoppers on Hatly may request and receive refunds for payments made through the platform.
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            1. Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Hatly operates as a platform that connects shoppers with travelers for delivery services. All payments made by shoppers are securely held until the delivery process is completed.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            2. Payment Holding
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="When a shopper confirms a shipment request, the full amount (including traveler reward and Hatly fees) is charged and held securely." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Funds are not released to the traveler until successful delivery is confirmed." sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            3. Refund Eligibility
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7, fontWeight: '600' }}>
            a. Full Refund Cases (100%)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            A shopper is eligible for a full refund if:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The traveler fails to deliver the shipment" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The traveler cancels the trip or delivery" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The shipment request is not accepted by any traveler" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The delivery is not completed within the agreed timeframe" sx={{ m: 0 }} />
            </ListItem>
          </List>

          <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7, fontWeight: '600' }}>
            b. Partial Refund Cases
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            A partial refund may be issued if:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The shipment is delivered late (based on agreed conditions)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="There is a minor issue with the delivery (subject to review)" sx={{ m: 0 }} />
            </ListItem>
          </List>

          <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7, fontWeight: '600' }}>
            c. No Refund Cases
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Refunds will not be issued if:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The shopper confirms delivery by entering the PIN code" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The shipment matches the agreed description and is successfully delivered" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The issue arises due to incorrect information provided by the shopper" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            4. PIN Code Confirmation
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="The PIN code is considered final confirmation of successful delivery" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Once the PIN is entered, funds are released to the traveler and the transaction is non-reversible" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            5. Dispute & Support
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="If there is an issue, either party can submit a support request through the platform" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Hatly will review the case and may request evidence (messages, photos, etc.)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Hatly reserves the right to make the final decision on refunds" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            6. Processing Time
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Approved refunds are processed within 5–10 business days" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Processing time may vary depending on the payment provider (e.g., Stripe)" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            7. Fees
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Platform fees may be non-refundable in certain cases (e.g., completed services or operational costs)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Any applicable deductions will be clearly communicated" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            8. Fraud & Abuse
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Hatly reserves the right to deny refunds in cases of fraud, abuse, or violation of terms.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            9. Policy Updates
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Hatly may update this Refund Policy at any time. Users will be notified of significant changes.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            If you have questions or concerns about this Refund Policy, please contact us at:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Email: support@hatly.tech"
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Website: www.hatly.tech"
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 4, borderColor: '#e2e8f0' }} />

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#64748b',
            fontStyle: 'italic',
          }}
        >
          Thank you for trusting Hatly for your delivery needs.
        </Typography>
      </Container>
    </Box>
  );
}

export default RefundPolicy;
