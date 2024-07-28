import { $Enums, Technologies } from '@prisma/client';

export class TechnologiesEntity implements Technologies {
  level: $Enums.Level;
  id: bigint;
  candidateId: bigint;
  name: string;
}
