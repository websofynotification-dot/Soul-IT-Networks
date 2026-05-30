import React from 'react'
import { CertificationCard } from './CertificationCard'
import Certificate from '@/models/admin-model/HomePage/Certificate'
import { getData } from '@/lib/getData';

export const Certifications: React.FC = async () => {
  const data = await getData(Certificate);
  return <CertificationCard cardData={data} />
}
