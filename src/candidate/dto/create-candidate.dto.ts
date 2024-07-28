import { $Enums } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
    @ApiProperty({
        description: 'Nome do candidato',
        example: 'João Silva',
        maxLength: 255
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 255)
    name: string;

    @ApiProperty({
        description: 'Email do candidato',
        example: 'joao.silva@example.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Telefone do candidato',
        example: '11987654321',
        minLength: 11,
        maxLength: 11
    })
    @IsNumberString()
    @IsNotEmpty()
    @Length(11, 11)
    phone: string;

    @ApiProperty({
        description: 'Tipo de contribuição do candidato',
        enum: $Enums.Contribution,
        example: $Enums.Contribution.APPRENTICE
    })
    @IsEnum($Enums.Contribution)
    contributionType: $Enums.Contribution;
}

