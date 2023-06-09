import Link from "next/link";
import {Stack, styled, Switch, useColorScheme} from "@mui/joy";
import {AppBar, Toolbar} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useEffect, useState} from "react";


export default function Header() {
    const {mode, systemMode, setMode} = useColorScheme();
    const [color, setColor] = useState(false);
    const isDark = (mode||systemMode)==='dark';
    const NavLink = styled(Link)(({theme})=>({
        textDecoration: "none",
        ...theme.typography.subtitle1,
        color: isDark?theme.vars.palette.common.white:theme.vars.palette.common.black,
        "&:hover":{
            textDecoration: ` ${theme.vars.palette.secondary.main} double underline !important`
        }
    }));

    useEffect(() => {
        const nav = document.querySelector('header');

        window.addEventListener('scroll', ()=>{
            if (scrollY>nav!.clientHeight){
                nav!.style.cssText=`background: var(--AppBar-background)`;
                setColor(true);
            }else {
                nav!.style.background = "transparent";
                setColor(false);
            }
        });
    },[]);

    return (
        <>
            <AppBar enableColorOnDark position="sticky" elevation={0} sx={{background: 'transparent'}}>
                <Toolbar sx={{gap: 2}}>
                    <Link href={"/"}>
                        <svg width="70" height="15" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80">
                            <path fill="#000"
                                  d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/>
                            <path fill="#000"
                                  d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" fill="none">
                            <g opacity=".9">
                                <path fill="url(#a)" d="M13 .4v29.3H7V6.3h-.2L0 10.5V5L7.2.4H13Z"/>
                                <path fill="url(#b)"
                                      d="M28.8 30.1c-2.2 0-4-.3-5.7-1-1.7-.8-3-1.8-4-3.1a7.7 7.7 0 0 1-1.4-4.6h6.2c0 .8.3 1.4.7 2 .4.5 1 .9 1.7 1.2.7.3 1.6.4 2.5.4 1 0 1.7-.2 2.5-.5.7-.3 1.3-.8 1.7-1.4.4-.6.6-1.2.6-2s-.2-1.5-.7-2.1c-.4-.6-1-1-1.8-1.4-.8-.4-1.8-.5-2.9-.5h-2.7v-4.6h2.7a6 6 0 0 0 2.5-.5 4 4 0 0 0 1.7-1.3c.4-.6.6-1.3.6-2a3.5 3.5 0 0 0-2-3.3 5.6 5.6 0 0 0-4.5 0 4 4 0 0 0-1.7 1.2c-.4.6-.6 1.2-.6 2h-6c0-1.7.6-3.2 1.5-4.5 1-1.3 2.2-2.3 3.8-3C25 .4 26.8 0 28.8 0s3.8.4 5.3 1.1c1.5.7 2.7 1.7 3.6 3a7.2 7.2 0 0 1 1.2 4.2c0 1.6-.5 3-1.5 4a7 7 0 0 1-4 2.2v.2c2.2.3 3.8 1 5 2.2a6.4 6.4 0 0 1 1.6 4.6c0 1.7-.5 3.1-1.4 4.4a9.7 9.7 0 0 1-4 3.1c-1.7.8-3.7 1.1-5.8 1.1Z"/>
                            </g>
                            <defs>
                                <linearGradient id="a" x1="20" x2="20" y1="0" y2="30.1" gradientUnits="userSpaceOnUse">
                                    <stop/>
                                    <stop offset="1" stopColor="#3D3D3D"/>
                                </linearGradient>
                                <linearGradient id="b" x1="20" x2="20" y1="0" y2="30.1" gradientUnits="userSpaceOnUse">
                                    <stop/>
                                    <stop offset="1" stopColor="#3D3D3D"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                    <Stack flexGrow={1} flexDirection={"row"} alignItems={"center"} justifyContent={"flex-end"} gap={2}
                           sx={{"&>a:hover": {textDecoration: "underline"}}}>
                        <NavLink sx={{color: color?"common.white":isDark?"common.white":"common.black"}} href={"/portfolios"}>
                            Portfolios
                        </NavLink>
                        <NavLink sx={{color: color?"common.white":isDark?"common.white":"common.black"}} href={"/roadmap"}>
                            Roadmap
                        </NavLink>
                        <NavLink sx={{color: color?"common.white":isDark?"common.white":"common.black"}} href={"/about"}>
                            About us
                        </NavLink>
                    </Stack>
                    <Switch
                        checked={isDark}
                        onChange={()=>setMode(isDark?"light":"dark")}
                        slotProps={{
                            track: {
                                children: (
                                    <>
                                        <LightMode sx={{ml: 1}}/>
                                        <DarkMode sx={{mr: 1, color: "secondary.main"}}/>
                                    </>
                                ),
                            },
                        }}
                        sx={{
                            '--Switch-thumbSize': '25px',
                            '--Switch-trackWidth': '60px',
                            '--Switch-trackHeight': '31px',
                            '--Switch-trackBackground': '#25252d',
                        }}
                    />
                </Toolbar>
            </AppBar>
        </>
    );
}
