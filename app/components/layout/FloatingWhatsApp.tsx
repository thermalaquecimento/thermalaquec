import React from 'react';
import { FloatingWhatsApp as Component } from 'react-floating-whatsapp';
import { useHomepage } from '../utils/hooks/useHomepage';
import { Box } from '@mui/material';
import whatsappIcon from "/images/whatsapp-icon.jpg";

export function FloatingWhatsApp() {
    const [visible, setVisible] = React.useState(false);

    const homepage = useHomepage();
    const icon = useIcon();

    React.useEffect(() => {
        if (!homepage || !icon) {
            setVisible(false)
            return;
        }

        setVisible(true);
    }, [homepage, icon]);

    return (
        <Box className={visible ? 'block' : 'hidden'}>
            <Component {...{
                phoneNumber: '+5554999161816',
                accountName: 'Lucas - Thermal',
                chatMessage: 'Olá, como posso ajudar?',
                placeholder: "Mensagem",
                statusMessage: "",
                avatar: whatsappIcon,
                messageDelay: .75,
                darkMode: true,
                allowEsc: true,
            }} />
        </Box>
    )
}

function useIcon(): boolean {
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        setOffset(window.scrollY);

        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [setOffset]);

    return offset > 150;
}