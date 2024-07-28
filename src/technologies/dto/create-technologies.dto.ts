import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateTechnologiesDto {
  @ApiProperty({
      description: 'Nome da tecnologia',
      example: 'TypeScript',
      maxLength: 255
  })
  @IsString()
  name: string;

  @ApiProperty({
      description: 'ID do candidato associado à tecnologia',
      example: 1
  })
  @IsInt()
  candidateId: number;

  @ApiProperty({
      description: 'Nível de proficiência na tecnologia',
      example: 'Avançado',
      maxLength: 50
  })
  @IsString()
  level: string;
}
