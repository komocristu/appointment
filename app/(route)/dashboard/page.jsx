"use client"
import React, { useEffect, useState } from 'react'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from '@/config/FirebaseConfig';
import { useRouter } from 'next/navigation';

function Dashboard() {
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    

    useEffect(() => {
        if (user) {
            isBussinessRegistered();
        }
    }, [user]);

    const isBussinessRegistered = async () => {
        const docRef = doc(db, 'Bussiness', user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setIsLoading(false);
        } else {
            console.log("No such document!");
            setIsLoading(false);    
            router.replace('/Create-Business');
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>Dashboard
            <LogoutLink>Logout</LogoutLink>
        </div>
    )
}

export default Dashboard